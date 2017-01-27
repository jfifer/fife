import { Component } from '@angular/core';
import { Http, Headers } from 'angular2/http';

@Component({
  selector: 'my-app',
  template: `<h1>Hello</h1>`,
})
export class AppComponent  { 
   randomQuote: string;
   secretQuote: string

   constructor(public http: Http) { }

   logError(err: string) {
      console.error("This is fine: " + err);
   }

   getRandomQuote() {
    this.http.get('http://localhost:3001/api/random-quote')
      .subscribe(
        data => this.randomQuote = data.text(),
        err => this.logError(err.text()),
        () => console.log('Random Quote Complete')
      );
  } 
}
