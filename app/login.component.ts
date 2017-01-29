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
   public username: any;
   public password: any;
   public url: string;
   public uid: string;
   loggedIn = false;
   public result: any;
   public test: any;

   constructor(private http: Http) { 
     this.checkAuth();
   }

   doCheckAuth() {
     this.url = "api/portal/auth";
     return this.http.get(this.url).map((res:Response)=>res.json());
   }

   checkAuth() {
      this.doCheckAuth().subscribe(function(res){
	console.log(parseInt(res.uid));
	console.log(parseInt(res.uid)>0);
	if(parseInt(res.uid) > 0) {
	  this.loggedIn = true;
	} else {
	  this.loggedIn = false;
	}
	console.log("duck: " + this.loggedIn);
      });
   }

   doLogin() {
     this.url = "api/portal/auth/" + this.username + "/" + this.password;
     return this.http.get(this.url).map((res:Response)=>res.json())
   }

   login() {
      this.doLogin().subscribe(
         data=>{this.result = data},
         err=>console.error("this is fine"),
         ()=>console.log(this.result)
      );
   }

   logout() {

   }
}

