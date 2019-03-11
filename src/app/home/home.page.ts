import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  userData;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userData = this.authService.userData;
    console.log(this.userData.user.email);
  }
}
