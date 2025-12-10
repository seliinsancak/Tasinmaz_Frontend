import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TasinmazListeComponent } from './tasinmaz-liste.component'; // aynı isim

describe('TasinmazListeComponent', () => {
  let component: TasinmazListeComponent;
  let fixture: ComponentFixture<TasinmazListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasinmazListeComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TasinmazListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
