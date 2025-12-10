import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasinmazListeComponent } from './components/tasinmaz-liste/tasinmaz-liste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TasinmazListeComponent],
  template: `
    <div class="container mt-4">
      <h1 class="mb-4">Taşınmaz Yönetimi</h1>
      <app-tasinmaz-liste></app-tasinmaz-liste>
    </div>
  `
})
export class AppComponent {}
