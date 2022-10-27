"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TypeBillService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("src/environments/environment");
var operators_1 = require("rxjs/operators");
var handle_errors_http_1 = require("src/app/shared/service/handle-errors-http");
var API_URL = environment_1.environment.apiURLMicroserviceNuevaCuentaAhorro + '/api/0v1/TiempoPlanDeAhorro';
var TypeBillService = /** @class */ (function (_super) {
    __extends(TypeBillService, _super);
    function TypeBillService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    TypeBillService.prototype.registerNewTiempoPlanDeAhorro = function (request) {
        var headers = new http_1.HttpHeaders({
            'Content-Type': environment_1.environment.mediaTypes.tiempoPlanDeAhorro.post.ContentType.postJson
        });
        return this.http.post("" + API_URL, request, {
            headers: headers,
            observe: 'response',
            responseType: 'json'
        }).pipe(operators_1.tap(function (resp) {
            // var entity:RegistrationResponse = resp.body;
            console.log(resp);
            // this.credentialService.saveToken(entity.token);
            // this.credentialService.saveNameSignIn(entity.username);
        }), operators_1.catchError(this.handleError));
    };
    TypeBillService.prototype.getAllTiempoPlanDeAhorro = function (params) {
        var headers;
        var eTag;
        eTag = localStorage.getItem('If-None-Match-get------');
        headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            Accept: environment_1.environment.mediaTypes.tiempoPlanDeAhorro.getAll.accept.getAllclientJson,
            'If-None-Match': "\"" + eTag + "\""
        });
        return this.http
            .get(API_URL + "/pagination", {
            headers: headers,
            observe: 'response',
            responseType: 'json',
            params: params
        })
            .pipe(operators_1.tap(function (resp) {
            // var entity:RegistrationResponse = resp.body;
        }), operators_1.catchError(this.handleError));
    };
    TypeBillService.prototype.getUniqueTiempoPlanDeAhorro = function (id, params) {
        var headers;
        var eTag;
        eTag = localStorage.getItem('If-None-Match-get------');
        headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            Accept: environment_1.environment.mediaTypes.tiempoPlanDeAhorro.getUnique.accept.getClientJson,
            'If-None-Match': "\"" + eTag + "\""
        });
        return this.http
            .get(API_URL + "/" + id, {
            headers: headers,
            observe: 'response',
            responseType: 'json',
            params: params
        })
            .pipe(operators_1.tap(function (resp) {
            // var entity:RegistrationResponse = resp.body;
        }), operators_1.catchError(this.handleError));
    };
    TypeBillService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TypeBillService);
    return TypeBillService;
}(handle_errors_http_1.HandleErrorsHttp));
exports.TypeBillService = TypeBillService;
