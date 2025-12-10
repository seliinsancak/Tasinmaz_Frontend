import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasinmaz } from '../models/Tasinmaz';

@Injectable({
  providedIn: 'root'
})
export class TasinmazListeService {

  private apiUrl = 'https://localhost:7190/api/Tasinmaz'; // Backend URL

  constructor(private http: HttpClient) { }

  // Tüm taşınmazları getir
  getAllTasinmazlar(): Observable<Tasinmaz[]> {
    return this.http.get<Tasinmaz[]>(this.apiUrl);
  }

  // Yeni taşınmaz ekle
  addTasinmaz(tasinmaz: Omit<Tasinmaz, 'id'>): Observable<Tasinmaz> {
    return this.http.post<Tasinmaz>(this.apiUrl, tasinmaz);
  }

  // Taşınmaz güncelle
  updateTasinmaz(tasinmaz: Tasinmaz): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${tasinmaz.id}`, tasinmaz);
  }

  // Taşınmaz sil
  deleteTasinmaz(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
