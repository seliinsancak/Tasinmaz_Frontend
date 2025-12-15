// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasinmazListeComponent } from './components/tasinmaz-liste/tasinmaz-liste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TasinmazListeComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  pills = []; // TS2339 hatası için placeholder
}
