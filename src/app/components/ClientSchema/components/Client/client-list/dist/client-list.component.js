"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientListComponent = void 0;
var core_1 = require("@angular/core");
var functionsShared_1 = require("src/app/shared/functions/functionsShared");
var ClientFunctions_1 = require("../../../functions/Client/ClientFunctions");
var options_client_1 = require("../../../models/Client/options-client");
var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(clientService, utilsService, getSettingsService) {
        this.clientService = clientService;
        this.utilsService = utilsService;
        this.getSettingsService = getSettingsService;
        this.optionsClient = null;
        this.showFiltersGenericsClient = false;
        this.showFiltersParticular = false;
        this.color1 = "btn btn-dark";
        this.color3 = "btn btn-dark";
        this.optionsClient = new options_client_1.OptionsClient();
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSettingsService.settingsClients(this.optionsClient.showPerPage, "list-client").subscribe(function (result) {
            _this.optionsClient.settings = result;
        }, (function (err) {
            console.warn(err);
        }));
        ClientFunctions_1.GetClients(this.clientService, this.optionsClient, this.utilsService);
        this.initOnChagedDataTable();
    };
    ClientListComponent.prototype.changeShowPerPage = function (event) {
        functionsShared_1.ChangeShowSourcePerPage(this.optionsClient, event);
    };
    ClientListComponent.prototype.initOnChagedDataTable = function () {
        var _this = this;
        this.optionsClient.source.onChanged().subscribe(function (change) {
            if (change.action === 'paging') {
                if (_this.optionsClient.source.count() <= change.paging.perPage) {
                    _this.changePagueSourceClient(1);
                }
            }
            if (change.action === 'page') {
                _this.changePagueSourceClient(change.paging.page);
            }
        });
    };
    ClientListComponent.prototype.changePagueSourceClient = function (pageIndex) {
        var getNew = pageIndex * this.optionsClient.showPerPage;
        if (getNew >= this.optionsClient.source.count() && getNew < this.optionsClient.totalCount) {
            this.optionsClient.pageIndex = this.optionsClient.pageIndex + 1;
            ClientFunctions_1.GetClientsNextPage(this.clientService, this.optionsClient, this.utilsService);
        }
    };
    ClientListComponent.prototype.searchData = function () {
        this.optionsClient.pageIndex = 1;
        ClientFunctions_1.GetClients(this.clientService, this.optionsClient, this.utilsService);
    };
    ClientListComponent.prototype.showFiltersGenericsClientAction = function () {
        if (this.color3 == "btn btn-dark") {
            this.showFiltersGenericsClient = true;
            this.showFiltersParticular = false;
            this.color3 = "btn btn-info";
            this.color1 = "btn btn-dark";
        }
        else {
            this.color3 = "btn btn-dark";
            this.showFiltersGenericsClient = false;
        }
    };
    ClientListComponent.prototype.showFiltersParticularAction = function () {
        if (this.color1 == "btn btn-dark") {
            this.showFiltersParticular = true;
            this.showFiltersGenericsClient = false;
            this.color1 = "btn btn-info";
            this.color3 = "btn btn-dark";
        }
        else {
            this.showFiltersParticular = false;
            this.color1 = "btn btn-dark";
        }
    };
    ClientListComponent.prototype.resetParams = function () {
        this.optionsClient.resetParams();
        this.optionsClient.clientsPaginParams.resetParams();
    };
    ClientListComponent = __decorate([
        core_1.Component({
            selector: 'app-client-list',
            templateUrl: './client-list.component.html',
            styleUrls: ['./client-list.component.scss']
        })
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;
