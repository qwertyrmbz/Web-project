import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { ApiService } from '../services/api.service';
import { Subtopic } from '../interfaces/subtopic';

@Component({
  selector: 'app-subtopics',
  templateUrl: './subtopics.component.html',
  styleUrls: ['./subtopics.component.css']
})
export class SubtopicsComponent implements OnInit {
  @Input() topic: Topic;
  subtopics: Subtopic[];
  showComponent = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSubtopics();
  }

  getSubtopics(): void {
    this.apiService.getSubtopicsByTopicId(this.topic.id)
      .subscribe(subtopics => this.subtopics = subtopics);
  }

  showCreateComponent(): void {
    if (this.showComponent) {
      this.showComponent = false;
    }
    else {
      this.showComponent = true;
    }
  }

  delete(subtopicId): void {
    this.apiService.deleteSubtopic(subtopicId).subscribe(res => {
      window.location.reload();
    });
  }
}
