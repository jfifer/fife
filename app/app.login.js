"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require("@angular/http");
require('rxjs/Rx');
let Login = class Login {
    constructor(http) {
        this.http = http;
    }
    doShit() {
        return this.http.get("api/portal/fuck/shit").map((res) => res.json());
    }
    start() {
        console.log("here we go");
        this.doShit().subscribe(data => { this.fuck = data; }, err => console.error("this is fine"), () => console.log("holy fuck balls"));
    }
};
Login = __decorate([
    core_1.Component({
        selector: 'appHeader',
        template: `<button (click)="start()">crap</button>`,
    }),
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], Login);
exports.Login = Login;
//# sourceMappingURL=app.login.js.map