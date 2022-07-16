import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { Subtopic } from '../interfaces/subtopic';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-subtopic',
  templateUrl: './create-subtopic.component.html',
  styleUrls: ['./create-subtopic.component.css']
})
export class CreateSubtopicComponent implements OnInit {
  @Input() curtopic: Topic;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  add(name: string, description: string, code: string): void {
    name = name.trim();
    description = description.trim();
    code = code.trim();
    const topic: number = this.curtopic.id;
    this.apiService.addSubtopic({ topic, name, description, code } as Subtopic, topic)
      .subscribe(top => {
        window.location.reload();
      });
  }
}
