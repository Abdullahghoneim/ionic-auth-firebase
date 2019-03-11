import { Component, OnInit } from '@angular/core';
import { User } from '../login/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: User = {
    email: '',
    password: ''
  }
  errorMessage;
  constructor(private auth: AuthService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }
  signupSubmit() {
    this.auth.signup(this.user).then(res => {
      this.router.navigate(['home'])
    }).catch(err => {
      this.errorMessage = err;
      this.presentAlert()
    })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: this.errorMessage.message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
