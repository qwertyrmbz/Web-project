import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../interfaces/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  checked = 0;
  constructor(private apiService: ApiService,
              private location: Location) { }

  ngOnInit(): void {
  }

  check(): void {
    if (this.checked === 0) {
      this.checked = 1;
    }
    else {
      this.checked = 0;
    }
  }
  // tslint:disable-next-line:variable-name
  add(email: string, first_name: string, last_name: string, username: string, password: string) {
    email = email.trim();
    first_name = first_name.trim();
    last_name = last_name.trim();
    username = username.trim();
    password = password.trim();
    // tslint:disable-next-line:variable-name
    // let is_staff = 0;
    // if (staff === '1') {
    //   is_staff = 1;
    // }
    // tslint:disable-next-line:variable-name
    const is_staff: number = this.checked;
    this.apiService.addUser({email, first_name, last_name, username, password, is_staff} as User)
      .subscribe(user => {
        window.alert('Congratulations! You have created an account!');
        this.location.back();
      });
  }
}
