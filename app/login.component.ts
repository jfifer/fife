import { Injectable, Component } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'appHeader',
  template: `
	<input [(ngModel)]="username" placeholder="username" />
	<input [(ngModel)]="password" type="password" placeholder="password" />
	<button (click)="start()">login</button>`,
})
@Injectable()
export class LoginComponent {
   public username: any;
   public password: any;
   public url: string;
   public result: any;

   constructor(private http: Http) { }

   doCall() {
     this.url = "api/auth/" + this.username + "/" + this.password;
     return this.http.get(this.url).map((res:Response)=>res.json())
   }

   start() {
      this.doCall().subscribe(
         data=>{this.result = data},
         err=>console.error("this is fine"),
         ()=>console.log(this.result)
      );
   }
}

