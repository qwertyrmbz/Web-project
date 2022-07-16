import { Component, OnInit } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {
  topic: Topic;

  constructor( private route: ActivatedRoute,
               private apiService: ApiService,
               private location: Location) { }

  ngOnInit(): void {
    this.getTopic();
  }

  getTopic(): void {
    const id = +this.route.snapshot.paramMap.get('topicId');
    this.apiService.getTopicByTopicId(id)
      .subscribe(topic => this.topic = topic);
  }

  save(): void {
    this.apiService.updateTopic(this.topic, this.topic.id)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
