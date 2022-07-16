import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Section } from '../interfaces/section';
import { Topic } from '../interfaces/topic';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {
  constructor(private apiService: ApiService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  add(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    const section: number = +this.route.snapshot.paramMap.get('sectionId');
    this.apiService.addTopic({ section, name, description } as Topic, section)
      .subscribe(topic => {
        window.location.reload();
      });
  }
}
