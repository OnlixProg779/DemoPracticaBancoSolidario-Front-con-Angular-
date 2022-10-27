"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var ClientFunctions_1 = require("../../ClientSchema/functions/Client/ClientFunctions");
var options_client_1 = require("../../ClientSchema/models/Client/options-client");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(clientService, utilsService, getSettingsService, router) {
        this.clientService = clientService;
        this.utilsService = utilsService;
        this.getSettingsService = getSettingsService;
        this.router = router;
        this.optionsClient = null;
        this.clientId = "";
        this.optionsClient = new options_client_1.OptionsClient();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSettingsService.settingsClients(this.optionsClient.showPerPage, "dashboard", this.router).subscribe(function (result) {
            _this.optionsClient.settings = result;
        }, (function (err) {
            console.warn(err);
        }));
        ClientFunctions_1.GetClients(this.clientService, this.optionsClient, this.utilsService);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
