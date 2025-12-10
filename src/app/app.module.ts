import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TasinmazListeComponent } from './components/tasinmaz-liste/tasinmaz-liste.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppComponent,          // declarations yerine imports
    TasinmazListeComponent // standalone bileşenleri imports’a ekle
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
