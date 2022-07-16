import { Component, OnInit } from '@angular/core';
import { Subtopic } from '../interfaces/subtopic';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-subtopic-details',
  templateUrl: './subtopic-details.component.html',
  styleUrls: ['./subtopic-details.component.css']
})
export class SubtopicDetailsComponent implements OnInit {
  subtopic: Subtopic;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private location: Location) { }

  ngOnInit(): void {
    this.getSubtopic();
  }

  getSubtopic(): void {
    const id = +this.route.snapshot.paramMap.get('subtopicId');
    this.apiService.getSubtopicBySubtopicId(id)
      .subscribe(subtopic => this.subtopic = subtopic);
    this.subtopic.code.replace('\n', '<br>');
  }

  save(): void {
    this.apiService.updateSubtopic(this.subtopic, this.subtopic.id)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
