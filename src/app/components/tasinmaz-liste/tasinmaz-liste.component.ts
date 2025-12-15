import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tasinmaz, TasinmazListeService, TasinmazEkleDTO } from '../../services/tasinmaz-liste.service';

@Component({
  selector: 'app-tasinmaz-liste',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasinmaz-liste.component.html',
  styleUrls: ['./tasinmaz-liste.component.scss']
})
export class TasinmazListeComponent implements OnInit {
  tasinmazlar: Tasinmaz[] = [];
  form: FormGroup;
  editId: number | null = null;
  showForm = false;

  constructor(private service: TasinmazListeService, private fb: FormBuilder) {
    this.form = this.fb.group({
      ada: ['', Validators.required],
      parsel: ['', Validators.required],
      nitelik: [''],
      adres: [''],
      mahalleId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTasinmazlar();
  }

  loadTasinmazlar() {
    this.service.getAll().subscribe((res: Tasinmaz[]) => {
      this.tasinmazlar = res;
    });
  }

  openAdd() {
    this.showForm = true;
    this.editId = null;
    this.form.reset();
  }

  openEdit(t: Tasinmaz) {
    this.showForm = true;
    this.editId = t.id;
    this.form.patchValue({
      ada: t.ada,
      parsel: t.parsel,
      nitelik: t.nitelik,
      adres: t.adres,
      mahalleId: 0 // TODO: backend’den MahalleId alınacak
    });
  }

  submit() {
    const dto: TasinmazEkleDTO = this.form.value;
    if (this.editId) {
      this.service.update(this.editId, dto).subscribe(() => {
        this.loadTasinmazlar();
        this.showForm = false;
      });
    } else {
      this.service.add(dto).subscribe(() => {
        this.loadTasinmazlar();
        this.showForm = false;
      });
    }
  }

  delete(id: number) {
    if (confirm('Silmek istediğinize emin misiniz?')) {
      this.service.delete(id).subscribe(() => {
        this.loadTasinmazlar();
      });
    }
  }
}
