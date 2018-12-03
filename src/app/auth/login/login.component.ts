import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../Services/main.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private mainservice: MainService) { }

  ngOnInit() {
  }

  submitForm(UserDetails: any) {
    var body = UserDetails;
    console.log(body);
    this.mainservice.PostRequest('SignIn', body).subscribe(response => {
      console.log(response);
    },
      (err) => {
        this.mainservice.HandleErrorMessages(err);
      })
    // this.route.navigate(['']);

  }

  Register() {
    this.route.navigate(['/Register']);
    window.scrollTo(0, 0);
  }

}
