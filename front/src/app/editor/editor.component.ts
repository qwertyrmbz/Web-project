import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Section } from '../interfaces/section';
import { ApiService } from '../services/api.service';
import { Topic } from '../interfaces/topic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  sectionId: number;
  section: Section;
  topics: Topic[];
  showComponent = false;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSectionId();
  }

  getSectionId(): void {
    const id = +this.route.snapshot.paramMap.get('sectionId');
    this.sectionId = id;
    this.apiService.getSectionBySectionId(id)
      .subscribe(section => this.section = section);
    this.apiService.getTopicsBySectionId(id)
      .subscribe(topics => this.topics = topics);
  }

  showCreateComponent(): void {
    if (this.showComponent) {
      this.showComponent = false;
    }
    else {
      this.showComponent = true;
    }
  }
}
