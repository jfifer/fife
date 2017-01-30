import { Injectable, Component } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {LoginComponent} from './login.component';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `Stuff Goes Here.`,
  providers: [ LoginComponent ]
})
@Injectable()
export class AppComponent  { 
  public url: string = "api/portal/";
  public shit: any;

  constructor(login: LoginComponent) {
      console.log("fuck");
      login.checkAuth();
  }

  doGet() {
    
  }

  listServerGroups() {
    
  }

}
