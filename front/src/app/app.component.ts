import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  currentUser: User;
  logged = false;
  // constructor(private apiService: ApiService) {}
  //
  // ngOnInit(): void {
  //   // if (localStorage.getItem('username') != null) {
  //   //   const user: string = localStorage.getItem('username');
  //   //   this.apiService.getUser(user)
  //   //     .subscribe(us => this.currentUser = us);
  //   // }
  // }
}
