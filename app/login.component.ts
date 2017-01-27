import { Injectable, Component } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'appHeader',
  template: `<button (click)="start()">crap</button>`,
})
@Injectable()
export class LoginComponent {
   
   public result: null;
   constructor(private http: Http) { }

   doCall() {
     return this.http.get("api/portal/attr/attr2").map((res:Response)=>res.json())
   }

   start() {
      this.doCall().subscribe(
         data=>{this.result = data},
         err=>console.error("this is fine"),
         ()=>console.log("works")
      );
   }
}

