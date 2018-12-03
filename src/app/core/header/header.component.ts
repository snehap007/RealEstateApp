import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  NavigateToLogin(){
    this.route.navigate(['/Login']);
    window.scrollTo(0,0);
  }

  NavigateToAboutUS(){
    this.route.navigate(['/realEstate/AboutUS']);
    window.scrollTo(0,0);
  }

}
