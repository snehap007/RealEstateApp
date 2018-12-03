import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  Base_URL: any;
  constructor(private http: Http) {
    this.Base_URL = environment.Base_URL;
  }

  CheckNetworkConnection() {
    console.log(navigator.onLine);
    if (navigator.onLine) {
      return true;
    }
    else {
      return false;
    }
  }

  PostRequest(ApiName: any, RequestBody: any): Observable<any> {
    if (this.CheckNetworkConnection()) {
      var header = new Headers();
      header.append('content-Type', 'application/json');
      var options = new RequestOptions({ headers: header });
      return this.http.post(this.Base_URL + ApiName, RequestBody, options).
        pipe(
        map(this.extractData),
        catchError(this.HandleError)
        );
    }
    else {
      console.log("Check network connection!!");
    }
  }

  HandleError(error:any) {
    // 401 - unAuthorized
    if (error.status === 401) {
      return throwError(new Error(error.status));
    }
    // 500 - internal server error
    else if (error.status === 500) {
      return throwError(new Error(error.status));
    }
    // 400 - bad request
    else if (error.status === 400) {
      return throwError(new Error(error.status));
    }
    // 404 - not found
    else if (error.status === 404) {
      return throwError(new Error(error.status));
    }
    // 409 - conflict
    else if (error.status === 409) {
      return throwError(new Error(error.status));
    }
    // 408 - request timeout
    else if (error.status === 408) {
      return throwError(new Error(error.status));
    }
    else {
      return throwError(new Error(error.status));
    }
  }

  extractData(res) {
    if (res.status === 200) {
      let body = res.json();
      return body;
    }
    else {
      return {};
    }
  }

  HandleErrorMessages(err) {
    if (err.message == '401') {
      var message = "You are unauthorized to access the requested resource. Please log in!";
      // this.toastr.error('Error', message);
    }
    else if (err.message == '400') {
      var message = "Invalid syntax for this request was provided!";
      // this.toastr.error('Error', message);
    }
    else if (err.message == '404') {
      var message = "We could not find the resource you requested!";
      // this.toastr.error('Error', message);
    }
    else if (err.message == '409') {
      var message = "The request could not be completed due to a conflict with the current state of the resource!";
      // this.toastr.error('Error', message);
    }
    else if (err.message == '408') {
      var message = "Request time out please try again!";
      // this.toastr.error('Error', message);
    }
    else {
      var message = "Oops! Something went wrong";
      // this.toastr.error('Error', message);
    }
  }
}
