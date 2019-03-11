import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = {
    email: '',
    password: ''
  }
  errorMessage;
  constructor(private authService: AuthService, private router: Router, public alertController: AlertController, private storage: Storage) { }

  ngOnInit() {
  }
  loginSubmit() {
    this.authService.login(this.user).then(res => {
      this.router.navigate(['home'])
    })
      .catch(err => {
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
