import { Injectable } from '@angular/core';
import { Subtopic } from '../interfaces/subtopic';
import { Observable, of } from 'rxjs';
import { SUBTOPICS } from '../mock-data/mock-subtopics';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubtopicService {
  private subtopicsUrl = 'api/subtopics';


  constructor(private http: HttpClient) { }

  getSubtopics(): Observable<Subtopic[]> {
    console.log(this.subtopicsUrl)
    return  this.http.get<Subtopic[]>(this.subtopicsUrl);

  }
}
