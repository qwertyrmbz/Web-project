import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AppComponent } from '../app.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged = false;
  constructor(private apiService: ApiService,
              private location: Location,
              public mainapp: AppComponent) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token){
      this.logged = true;
      this.mainapp.logged = true;
    }
  }

  login(username: string, password: string): void {
    this.apiService.login(username, password)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', username);
        this.logged = true;
        this.mainapp.logged = true;
        this.apiService.getUser(username)
          .subscribe(user => this.mainapp.currentUser = user);
        window.alert('Welcome back, ' + username + '!');
        this.location.back();
      });
  }
}
