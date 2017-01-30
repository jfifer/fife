import { Injectable, Component } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'appHeader',
  templateUrl: "app/assets/partials/login.html"
})
@Injectable()
export class LoginComponent {
   public username: string;
   public password: string;
   public url: string;
   public uid: number;
   public loggedIn: boolean = false;

   constructor(private http: Http) { 
     this.checkAuth();
   }

   doGet(url: string) {
     return this.http.get(url).map((res:Response)=>res.json());	
   }

   checkAuth() {
      this.url = "api/portal/auth";
      this.doGet(this.url).subscribe(res => {
	  this.uid = parseInt(res.uid);
	  if(this.uid > 0) {
	    this.loggedIn = true;
	  } else {
	    this.loggedIn = false;
	  }
      });
   }

   login() {
      this.url = "api/portal/auth" + this.username + "/" + this.password;
      this.doGet(this.url).subscribe(res => {
	this.checkAuth();
      });
   }

   logout() {

   }
}

