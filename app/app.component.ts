import { Injectable, Component } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `Stuff Goes Here.`,
})
@Injectable()
export class AppComponent  { 
  public url: string = "api/portal/";

  constructor() { }

  doGet(url) {
    return this.http.get(url).map((res:Response)=>res.json());
  }

  listServerGroups() {
    this.url = "api/portal/query/server_group";
    this.doGet(this.url).subscribe(res => {
      console.log(res);
    });
  }

}
