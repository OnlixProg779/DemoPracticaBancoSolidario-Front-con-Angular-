"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UtilsService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.concatHttpParams = function (elemets) {
        return new rxjs_1.Observable(function (observer) {
            var paramString = "";
            var returnParams = new http_1.HttpParams();
            elemets.forEach(function (element) {
                paramString = paramString + element.toString() + '&';
            });
            paramString = paramString.slice(0, paramString.length - 1);
            var arreloParams = paramString.split("&");
            arreloParams.forEach(function (element) {
                var auxelem = element.split("=");
                returnParams = returnParams.append(auxelem[0], auxelem[1]);
            });
            observer.next(returnParams);
            observer.complete();
        });
    };
    UtilsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;
