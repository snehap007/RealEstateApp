import { Component, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  propertyList: any;
  constructor(private mainServiceObj: MainService) { }

  ngOnInit() {
    this.getAllPropertyList();
  }

  getAllPropertyList() {
    this.mainServiceObj.PostRequest('getAllProperties', '').subscribe(propertyResponse => {
      if (propertyResponse.Status === 200) {
        if (propertyResponse.Data.length > 0) {
          this.propertyList = propertyResponse.Data;
        }
      } else {
        this.mainServiceObj.showToaster('Error', propertyResponse.Message);
      }
    },
      (err) => {
        this.mainServiceObj.HandleErrorMessages(err);
      });
  }

}
