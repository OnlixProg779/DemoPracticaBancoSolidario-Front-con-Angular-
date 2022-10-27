"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormCreateCuentaAhorroComponent = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PlanAhorroFunctions_1 = require("src/app/components/BankSchema/functions/PlanAhorro/PlanAhorroFunctions");
var create_plan_ahorro_command_1 = require("src/app/components/BankSchema/models/Bill/commands/create-plan-ahorro-command");
var options_bill_1 = require("src/app/components/BankSchema/models/Bill/options-bill");
var uuid_1 = require("uuid");
var interes_por_periodo_1 = require("../../models/interes-por-periodo");
var FormCreateCuentaAhorroComponent = /** @class */ (function () {
    function FormCreateCuentaAhorroComponent(router, clientService, planAhorroService, tiempoPlanAhorroService, activatedRouter) {
        var _this = this;
        this.router = router;
        this.clientService = clientService;
        this.planAhorroService = planAhorroService;
        this.tiempoPlanAhorroService = tiempoPlanAhorroService;
        this.arrayTiempoPlanDeAhorro = [];
        this.valueSelected = null;
        this.filterNumber = new rxjs_1.Subject();
        this.auxPase1 = uuid_1.v4();
        this.optionsBill = new options_bill_1.OptionsBill();
        this.ahorroCuenta = null;
        activatedRouter.params.subscribe(function (params) {
            if (params.id) {
                var params2 = new http_1.HttpParams();
                clientService
                    .getUniqueClient(params.id, params2)
                    .subscribe(function (result) {
                    if (result.status == 201) {
                        _this.clientDto = result.body;
                    }
                }, function (err) {
                    console.warn(err);
                });
            }
        });
        this.ahorroCuenta = new create_plan_ahorro_command_1.CreatePlanAhorroCommand();
        this.getTiemposDePlanDeAhorro();
    }
    FormCreateCuentaAhorroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterNumber.pipe(operators_1.debounceTime(1000)).subscribe(function (input) {
            console.log(input);
            if (_this.ahorroCuenta.montoDeAhorro > 99 && _this.valueSelected != null) {
                _this.calcularInteresNominal(_this.ahorroCuenta.montoDeAhorro, _this.valueSelected);
            }
            else {
                _this.tablaDescriptiva = [];
            }
        });
    };
    FormCreateCuentaAhorroComponent.prototype.save = function () {
        this.ahorroCuenta.clientRef = this.clientDto.id;
        console.log(this.ahorroCuenta);
        if (this.ahorroCuenta.clientRef && this.ahorroCuenta.montoDeAhorro > 99) {
            PlanAhorroFunctions_1.CreatePlanAhorro(this.ahorroCuenta, this.planAhorroService, this.router, this.auxPase1);
        }
        else {
            alert("No se puede ingresar un monto inferior a $100");
        }
    };
    FormCreateCuentaAhorroComponent.prototype.onChangeCompany = function (value) {
        var aux = this.arrayTiempoPlanDeAhorro.find(function (a) { return a.id == value; });
        this.valueSelected = aux;
        if (this.ahorroCuenta.montoDeAhorro < 100) {
            alert("El monto de ahorro ingresado no puede ser menor a $100");
        }
        else {
            this.calcularInteresNominal(this.ahorroCuenta.montoDeAhorro, this.valueSelected);
        }
    };
    FormCreateCuentaAhorroComponent.prototype.calcularInteresNominal = function (aporteMensualIn, entity) {
        this.tablaDescriptiva = [];
        var aporteMensual = aporteMensualIn;
        var interesNominal = entity.tasaDeInteresAnual;
        var periodos = entity.meses;
        var tasaPorPeriodo = interesNominal / 12;
        var ultimoAporte = 0;
        for (var index = 0; index < periodos; index++) {
            var auxInteresGenerado = null;
            if (index == 0) {
                auxInteresGenerado = aporteMensual * (tasaPorPeriodo / 100);
                ultimoAporte = aporteMensual + auxInteresGenerado;
                this.tablaDescriptiva.push(new interes_por_periodo_1.InteresPorPeriodo(index + 1, aporteMensual, auxInteresGenerado, ultimoAporte));
            }
            else {
                var aux = ultimoAporte + aporteMensual;
                auxInteresGenerado = aux * (tasaPorPeriodo / 100);
                ultimoAporte = aux + auxInteresGenerado;
                this.tablaDescriptiva.push(new interes_por_periodo_1.InteresPorPeriodo(index + 1, aux, auxInteresGenerado, ultimoAporte));
            }
        }
    };
    FormCreateCuentaAhorroComponent.prototype.getTiemposDePlanDeAhorro = function () {
        var _this = this;
        var params = new http_1.HttpParams();
        this.tiempoPlanAhorroService
            .getAllTiempoPlanDeAhorro(params)
            .subscribe(function (result) {
            if (!result) {
                return;
            }
            if (result.status == 200) {
                _this.arrayTiempoPlanDeAhorro = result.body;
            }
        }, function (err) {
            console.warn(err);
        });
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
