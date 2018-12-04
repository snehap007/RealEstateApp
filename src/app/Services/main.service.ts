import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  Base_URL: any;
  constructor(private http: Http, private toaster: ToastrService) {
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

  HandleError(error: any) {
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

  showToaster(tag: any, message: any) {
    console.log(message);
    if (tag === 'Error') {
      this.toaster.error('Error', message);
    } else if (tag === 'Success') {
      this.toaster.success('Success', message);
    } else if (tag === 'Info') {
      this.toaster.info('Info', message);
    } else if (tag === 'Warn') {
      this.toaster.warning('Warning', message);
    }
  }

  extractData(res) {
    if (res.status === 200) {
      const body = res.json();
      return body;
    } else {
      return {};
    }
  }

  HandleErrorMessages(err) {
    let Message = '';
    if (err.message === '401') {
      Message = 'You are unauthorized to access the requested resource. Please log in!';
      this.showToaster('Error', Message);
    } else if (err.message === '400') {
      Message = 'Invalid syntax for this request was provided!';
    } else if (err.message === '404') {
      Message = 'We could not find the resource you requested!';
    } else if (err.message === '409') {
      Message = 'The request could not be completed due to a conflict with the current state of the resource!';
    } else if (err.message === '408') {
      Message = 'Request time out please try again!';
    } else {
      Message = 'Oops! Something went wrong';
    }
    this.showToaster('Error', Message);
  }
}
