import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tasinmaz {
  id: number;
  ada: string;
  parsel: string;
  nitelik?: string;
  adres?: string;
  mahalle: string;
  ilce: string;
  il: string;
}

export interface TasinmazEkleDTO {
  ada: string;
  parsel: string;
  nitelik?: string;
  adres?: string;
  mahalleId: number;
}

@Injectable({
  providedIn: 'root'
})
export class TasinmazListeService {
  private apiUrl = 'https://localhost:7190/api/Tasinmaz'; // backend URL

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tasinmaz[]> {
    return this.http.get<Tasinmaz[]>(this.apiUrl);
  }

  add(dto: TasinmazEkleDTO): Observable<any> {
    return this.http.post(this.apiUrl, dto);
  }

  update(id: number, dto: TasinmazEkleDTO): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
