import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Section } from '../interfaces/section';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

  getSections() {
    // return this.http.get<Section[]>('http://localhost:8000/api/sections/');
  }
}
