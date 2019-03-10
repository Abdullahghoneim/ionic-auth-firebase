import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user : User = {
      email: 'abdullahghoneim890@gmail.com', 
      password : '1997654s'
  }
  constructor() { }

  ngOnInit() {
  }

}
