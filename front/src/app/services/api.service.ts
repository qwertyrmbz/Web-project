import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from '../interfaces/topic';
import { Section } from '../interfaces/section';
import { Subtopic } from '../interfaces/subtopic';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { LoginResponse } from '../interfaces/loginresponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTopicsBySectionId(sectionId): Observable<Topic[]> {
    const url = `${this.baseUrl}/sections/${sectionId}/topics/`;
    return this.http.get<Topic[]>(url);
  }

  getSectionBySectionId(sectionId): Observable<Section> {
    const url = `${this.baseUrl}/sections/${sectionId}/`;
    return this.http.get<Section>(url);
  }

  getTopicByTopicId(topicId): Observable<Topic> {
    const url = `${this.baseUrl}/topics/${topicId}/edit/`;
    return this.http.get<Topic>(url);
  }

  getSubtopicsByTopicId(topicId): Observable<Subtopic[]> {
    const url = `${this.baseUrl}/topics/${topicId}/subtopics/`;
    return this.http.get<Subtopic[]>(url);
  }

  getSubtopicBySubtopicId(subtopicId): Observable<Subtopic> {
    const url = `${this.baseUrl}/subtopics/${subtopicId}/edit/`;
    return this.http.get<Subtopic>(url);
  }

  updateSubtopic(subtopic: Subtopic, subtopicId): Observable<Subtopic> {
    const url = `${this.baseUrl}/subtopics/${subtopicId}/edit/`;
    return this.http.put<Subtopic>(url, subtopic, this.httpOptions);
  }

  updateTopic(topic: Topic, topicId): Observable<Topic> {
    const url = `${this.baseUrl}/topics/${topicId}/edit/`;
    return this.http.put<Topic>(url, topic, this.httpOptions);
  }

  addTopic(topic: Topic, sectionId): Observable<Topic> {
    const url = `${this.baseUrl}/sections/${sectionId}/topics/`;
    return this.http.post<Topic>(url, topic, this.httpOptions);
  }

  addSubtopic(subtopic: Subtopic, topicId): Observable<Subtopic> {
    const url = `${this.baseUrl}/topics/${topicId}/subtopics/`;
    return this.http.post<Subtopic>(url, subtopic, this.httpOptions);
  }

  deleteSubtopic(subtopicId: number): Observable<any> {
    const url = `${this.baseUrl}/subtopics/${subtopicId}/edit/`;
    return this.http.delete<any>(url, this.httpOptions);
  }

  deleteTopic(topicId: number): Observable<any> {
    const url = `${this.baseUrl}/topics/${topicId}/edit/`;
    return this.http.delete<any>(url, this.httpOptions);
  }

  addUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/signup/`;
    return this.http.post<User>(url, user, this.httpOptions);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login/`, {
      username,
      password
    });
  }

  getUser(username): Observable<User> {
    const url = `${this.baseUrl}/users/${username}/`;
    return this.http.get<User>(url);
  }

  getSubtopics(): Observable<Subtopic[]> {
    const url = `${this.baseUrl}/subtopics/`;
    return this.http.get<Subtopic[]>(url);
  }
}
