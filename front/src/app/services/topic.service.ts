import { Injectable } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { Observable, of } from 'rxjs';
import { TOPICS } from '../mock-data/mock-topics';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private topicsUrl = 'api/topics';
  constructor(private http: HttpClient) { }
  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.topicsUrl);
  }
}
