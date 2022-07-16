import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input() topic: Topic;
  showSubtopics = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  showSubtopicsComponent(): void {
    if (this.showSubtopics) {
      this.showSubtopics = false;
    }
    else {
      this.showSubtopics = true;
    }
  }
  
  delete(topicId): void {
    this.apiService.deleteTopic(topicId)
      .subscribe(res => {
        window.location.reload();
      });
  }
}
