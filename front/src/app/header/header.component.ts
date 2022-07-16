import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../interfaces/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(public mainapp: AppComponent,
              private apiService: ApiService) { }

  ngOnInit(): void {
    if (localStorage.getItem('username') != null) {
      const user: string = localStorage.getItem('username');
      this.apiService.getUser(user)
        .subscribe(us => {
          this.mainapp.currentUser = us;
          this.user = us;
        });
    }
  }

  logOut(): void {
    this.mainapp.currentUser = undefined;
    this.mainapp.logged = false;
    this.user = undefined;
    localStorage.clear();
    window.location.reload();
  }
}
