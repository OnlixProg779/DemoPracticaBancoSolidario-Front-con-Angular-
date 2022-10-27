"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormCreateCuentaAhorroComponent = void 0;
var core_1 = require("@angular/core");
var PlanAhorroFunctions_1 = require("src/app/components/BankSchema/functions/PlanAhorro/PlanAhorroFunctions");
var create_plan_ahorro_command_1 = require("src/app/components/BankSchema/models/Bill/commands/create-plan-ahorro-command");
var options_bill_1 = require("src/app/components/BankSchema/models/Bill/options-bill");
var uuid_1 = require("uuid");
var FormCreateCuentaAhorroComponent = /** @class */ (function () {
    function FormCreateCuentaAhorroComponent(router, clientService) {
        this.router = router;
        this.clientService = clientService;
        this.auxPase1 = uuid_1.v4();
        this.optionsBill = new options_bill_1.OptionsBill();
        this.ahorroCuenta = null;
        this.ahorroCuenta = new create_plan_ahorro_command_1.CreatePlanAhorroCommand();
    }
    FormCreateCuentaAhorroComponent.prototype.ngOnInit = function () {
    };
    FormCreateCuentaAhorroComponent.prototype.save = function () {
        this.ahorroCuenta.clientRef = this.clientDto.id;
        if (this.ahorroCuenta.clientRef && this.ahorroCuenta.montoDeAhorro > 100) {
            PlanAhorroFunctions_1.CreatePlanAhorro(this.ahorroCuenta, this.clientService, this.router, this.auxPase1);
        }
    };
    FormCreateCuentaAhorroComponent.prototype.onChangeCompany = function (event) {
    };
    __decorate([
        core_1.Input()
    ], FormCreateCuentaAhorroComponent.prototype, "clientDto");
    FormCreateCuentaAhorroComponent = __decorate([
        core_1.Component({
            selector: 'app-form-create-cuenta-ahorro',
            templateUrl: './form-create-cuenta-ahorro.component.html',
            styleUrls: ['./form-create-cuenta-ahorro.component.scss']
        })
    ], FormCreateCuentaAhorroComponent);
    return FormCreateCuentaAhorroComponent;
}());
exports.FormCreateCuentaAhorroComponent = FormCreateCuentaAhorroComponent;
