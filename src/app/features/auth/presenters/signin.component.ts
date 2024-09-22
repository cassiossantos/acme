import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface User {
  name: string;
  email: string;
  avatarUrl: string;
}
@Component({
  selector: 'acme-signin-presenter',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninPresenterComponent implements OnInit {
  selectedUser: User | null = null;
  showPassword = false;
  password = '';

  users: User[] = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatarUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelectUser(user: User) {
    this.selectedUser = user;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.router.navigate(['/dashboard']);
  }
}
