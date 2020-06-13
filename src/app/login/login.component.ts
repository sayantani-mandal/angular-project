import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  showSpinner = false;
  error: string = null;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  login() {
    this.loginService.login(this.email, this.password);
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
}
