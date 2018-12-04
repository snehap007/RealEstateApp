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
    const body = UserDetails;
    console.log(body);
    this.mainservice.PostRequest('SignIn', body).subscribe(response => {
      if (response.Status === 200) {
        if (response.Data) {
          const token = response.Data.id + response.Data.username;
          localStorage.setItem('token', token);
          this.mainservice.showToaster('Success', response.Message);
          this.route.navigate(['/realEstate/Home']);
          window.scrollTo(0, 0);
        }
      } else {
        this.mainservice.showToaster('Error', response.Message);
      }
    },
      (err) => {
        this.mainservice.HandleErrorMessages(err);
      });
  }

  Register() {
    this.route.navigate(['/Register']);
    window.scrollTo(0, 0);
  }

}
