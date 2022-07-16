import { Component, OnInit } from '@angular/core';
import {SubtopicService} from '../services/subtopic.service';
import {TopicService} from '../services/topic.service';
import { Subtopic } from '../interfaces/subtopic';
import { Topic } from '../interfaces/topic';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {
  constructor(private subtopicService: SubtopicService,
              private topicService: TopicService,
              private route: ActivatedRoute,
              private apiService: ApiService) { }

  selected=[];
  tabs = [];
  last_active=[];
  active = [];
  isActive = false;
  topics: Topic[];
  subtopics: Subtopic[];
  sectionId: number;
  ngOnInit(): void {
    this.sectionId = +this.route.snapshot.paramMap.get('sectionId');
    this.getData();
    console.log(this.subtopics);
  }

  getData(): void {
    this.apiService.getSubtopics().subscribe(subtopic => this.subtopics = subtopic);
    this.apiService.getTopicsBySectionId(this.sectionId).subscribe(topic => this.topics = topic);
  }



  public findTopic(id){
    return this.subtopics.filter(s => s.topic == id);
  }
  public isSelected(id){
    return this.selected.some(x => x === id)
  }
  onClick(id): void {
    const index = this.selected.indexOf(id)
    if (index!=-1){
      this.selected.splice(index, 1)
    }
    else{
      this.selected.push(id)

    }

  }
  addTab(id, i): void{
    this.last_active = this.active;
    this.active = [i, id];
    // this.tabs.add([i,id])
    for (let ar of this.tabs){

      if (i === ar[0] && id ===ar[1]){

        return
      }
    }
    this.tabs.push([i, id])
    this.isActive = true;

  }
  getContent(l: Array<number>){
    if (l[0] === 0)
    {
      return this.topics.filter(s => s.id == l[1])[0];
    }
    else{
      return this.subtopics.filter(s => s.id == l[1])[0];
    }

  }
  getActive(){
    return this.getContent(this.active)
  }
  isActiveTab(tab): boolean{
    if (tab[0]===this.active[0]&&tab[1]===this.active[1]){
      return true
    }
    return false
  }
  changeActive(ar: Array<number>){
    this.last_active = this.active
    this.active = ar
  }
  delete(ar: Array<number>){
    let a = 0;
    let idx=-1;

    for (let tab of this.tabs){

      if (ar[0] === tab[0] && ar[1] ===tab[1]){

        let idx = a
      }
      a = a+1
    }
    this.tabs.splice(idx, 1)
    console.log(this.tabs)
    if (this.tabs.length !==0)
    {
      console.log('in')
      this.active = this.tabs[this.tabs.length-1]
    }
    else{

      this.isActive = false
    }

  }






}
