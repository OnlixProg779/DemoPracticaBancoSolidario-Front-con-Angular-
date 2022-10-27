"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientCreateComponent = void 0;
var core_1 = require("@angular/core");
var uuid_1 = require("uuid");
var ClientFunctions_1 = require("../../../functions/Client/ClientFunctions");
var ClientCreateComponent = /** @class */ (function () {
    function ClientCreateComponent(router, clientService) {
        this.router = router;
        this.clientService = clientService;
        this.renderValue = 'Client Add';
        this.auxPase1 = uuid_1.v4();
    }
    ClientCreateComponent.prototype.ngOnInit = function () {
    };
    ClientCreateComponent.prototype.save = function (client) {
        if (client.nombre) {
            ClientFunctions_1.CreateClient(client, this.clientService, this.router, this.auxPase1);
        }
    };
    ClientCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-client-create',
            templateUrl: './client-create.component.html',
            styleUrls: ['./client-create.component.scss']
        })
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());
exports.ClientCreateComponent = ClientCreateComponent;
