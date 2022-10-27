"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SecurityService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var API_URL = environment_1.environment.apiURL + '/api/v1/Account/';
var SecurityService = /** @class */ (function () {
    function SecurityService(http, router, credentialService) {
        this.http = http;
        this.router = router;
        this.credentialService = credentialService;
    }
    SecurityService.prototype.login = function (request) {
        var _this = this;
        var headers = new http_1.HttpHeaders({
            'Content-Type': environment_1.environment.mediaTypes.account.post.ContentType.postJsonLoginAdmin
        });
        return this.http.post(API_URL + "LoginAdmin/us", request, {
            headers: headers,
            observe: 'response',
            responseType: 'json'
        }).pipe(operators_1.tap(function (resp) {
            var entity = resp.body;
            console.log(resp);
            _this.credentialService.saveToken(entity.token);
            _this.credentialService.saveNameSignIn(entity.username);
        }), operators_1.catchError(this.handleError));
    };
    SecurityService.prototype.logout = function () {
        console.log("entro al logout");
        sessionStorage.removeItem('bearerToken');
        localStorage.removeItem('nombre_sing_in');
    };
    SecurityService.prototype.redirectToLogin = function () {
        this.router.navigate(['/auth/login']);
    };
    SecurityService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error("SANMARSEL Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // Return an observable with a user-facing error message.
        return rxjs_1.throwError('Something bad happened; please try again later.');
    };
    SecurityService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SecurityService);
    return SecurityService;
}());
exports.SecurityService = SecurityService;
