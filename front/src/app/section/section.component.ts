import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../interfaces/section';
import { AppComponent } from '../app.component';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() current: Section;
  user: User;

  constructor(private mainapp: AppComponent) { }

  ngOnInit(): void {
    this.user = this.mainapp.currentUser;
  }

}
