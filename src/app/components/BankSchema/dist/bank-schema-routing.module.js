"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BankSchemaRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var bill_create_component_1 = require("./components/Bill/bill-create/bill-create.component");
var bill_list_component_1 = require("./components/Bill/bill-list/bill-list.component");
var routes = [
    {
        path: '',
        children: [
            {
                path: 'create-account',
                component: bill_create_component_1.BillCreateComponent,
                data: {
                    title: "Crear De Ahorro",
                    breadcrumb: "Cuenta Ahorro - Interes Nominal"
                }
            },
            {
                path: 'list-bills',
                component: bill_list_component_1.BillListComponent,
                data: {
                    title: "Lista de Cuentas",
                    breadcrumb: "Cuenta Ahorros - Listado"
                }
            },
        ]
    }
];
var BankSchemaRoutingModule = /** @class */ (function () {
    function BankSchemaRoutingModule() {
    }
    BankSchemaRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], BankSchemaRoutingModule);
    return BankSchemaRoutingModule;
}());
exports.BankSchemaRoutingModule = BankSchemaRoutingModule;
