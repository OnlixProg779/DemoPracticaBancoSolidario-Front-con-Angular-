"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientSchemaRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var client_create_component_1 = require("./components/Client/client-create/client-create.component");
var client_list_component_1 = require("./components/Client/client-list/client-list.component");
var routes = [
    {
        path: '',
        children: [
            {
                path: 'list-client',
                component: client_list_component_1.ClientListComponent,
                data: {
                    title: "Client List",
                    breadcrumb: "Client List"
                }
            },
            {
                path: 'create-client',
                component: client_create_component_1.ClientCreateComponent,
                data: {
                    title: "Client List",
                    breadcrumb: "Client List"
                }
            },
        ]
    }
];
var ClientSchemaRoutingModule = /** @class */ (function () {
    function ClientSchemaRoutingModule() {
    }
    ClientSchemaRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], ClientSchemaRoutingModule);
    return ClientSchemaRoutingModule;
}());
exports.ClientSchemaRoutingModule = ClientSchemaRoutingModule;
