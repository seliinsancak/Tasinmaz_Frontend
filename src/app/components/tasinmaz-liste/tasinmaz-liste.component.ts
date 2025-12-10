import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tasinmaz } from '../../models/Tasinmaz';
import { TasinmazListeService } from '../../services/tasinmaz-liste.service';

@Component({
  selector: 'app-tasinmaz-liste',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasinmaz-liste.component.html',
  styleUrls: ['./tasinmaz-liste.component.scss']
})
export class TasinmazListeComponent implements OnInit {
  tasinmazlar: Tasinmaz[] = [];
  tasinmazForm: FormGroup;
  editingTasinmazId: number | null = null;

  constructor(private fb: FormBuilder, private tasinmazService: TasinmazListeService) {
    this.tasinmazForm = this.fb.group({
      adi: ['', Validators.required],
      ilId: [0, Validators.required],
      ilceId: [0, Validators.required],
      mahalleId: [0, Validators.required],
      fiyat: [0, Validators.required],
      durum: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTasinmazlar();
  }

  loadTasinmazlar(): void {
    this.tasinmazService.getAllTasinmazlar().subscribe(data => this.tasinmazlar = data);
  }

  submitForm(): void {
    const formValue = this.tasinmazForm.value as Omit<Tasinmaz, 'id'>;

    if (this.editingTasinmazId != null) {
      const updated: Tasinmaz = { id: this.editingTasinmazId, ...formValue };
      this.tasinmazService.updateTasinmaz(updated).subscribe(() => {
        this.loadTasinmazlar();
        this.tasinmazForm.reset();
        this.editingTasinmazId = null;
      });
    } else {
      this.tasinmazService.addTasinmaz(formValue).subscribe(() => {
        this.loadTasinmazlar();
        this.tasinmazForm.reset();
      });
    }
  }

  editTasinmaz(t: Tasinmaz): void {
    this.editingTasinmazId = t.id ?? null;
    this.tasinmazForm.patchValue(t);
  }

  deleteTasinmaz(id: number): void {
    if (confirm('Bu taşınmazı silmek istediğinizden emin misiniz?')) {
      this.tasinmazService.deleteTasinmaz(id).subscribe(() => this.loadTasinmazlar());
    }
  }

  cancelEdit(): void {
    this.editingTasinmazId = null;
    this.tasinmazForm.reset();
  }
}
