import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user : User = {
      email: '', 
      password : ''
  }
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  loginSubmit() {
    this.authService.login(this.user)
  }
}
