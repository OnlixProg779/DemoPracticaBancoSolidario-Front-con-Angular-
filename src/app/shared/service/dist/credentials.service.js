"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CredentialsService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CredentialsService = /** @class */ (function () {
    function CredentialsService() {
    }
    CredentialsService.prototype.saveToken = function (token) {
        sessionStorage.setItem('bearerToken', token);
        console.log("Entro Aqui");
        return new rxjs_1.Observable(function (observer) {
            observer.next(token);
            observer.complete();
        });
    };
    ;
    CredentialsService.prototype.getToken = function () {
        return new rxjs_1.Observable(function (observer) {
            observer.next(sessionStorage.getItem('bearerToken'));
            observer.complete();
        });
    };
    ;
    CredentialsService.prototype.saveNameSignIn = function (token) {
        sessionStorage.setItem('nombre_sing_in', token);
        return new rxjs_1.Observable(function (observer) {
            observer.next(token);
            observer.complete();
        });
    };
    ;
    CredentialsService.prototype.getNameSignIn = function () {
        return new rxjs_1.Observable(function (observer) {
            observer.next(sessionStorage.getItem('nombre_sing_in'));
            observer.complete();
        });
    };
    ;
    CredentialsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CredentialsService);
    return CredentialsService;
}());
exports.CredentialsService = CredentialsService;
