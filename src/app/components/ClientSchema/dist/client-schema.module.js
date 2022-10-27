"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientSchemaModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var client_schema_routing_module_1 = require("./client-schema-routing.module");
var client_create_component_1 = require("./components/Client/client-create/client-create.component");
var client_list_component_1 = require("./components/Client/client-list/client-list.component");
var client_form_component_1 = require("./components/Client/client-form/client-form.component");
var shared_module_1 = require("src/app/shared/shared.module");
var forms_1 = require("@angular/forms");
var filters_client_form_component_1 = require("./components/Client/filters-client-form/filters-client-form.component");
var ClientSchemaModule = /** @class */ (function () {
    function ClientSchemaModule() {
    }
    ClientSchemaModule = __decorate([
        core_1.NgModule({
            declarations: [
                client_create_component_1.ClientCreateComponent,
                client_list_component_1.ClientListComponent,
                client_form_component_1.ClientFormComponent,
                filters_client_form_component_1.FiltersClientFormComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                client_schema_routing_module_1.ClientSchemaRoutingModule,
                shared_module_1.SharedModule,
                forms_1.ReactiveFormsModule
            ]
        })
    ], ClientSchemaModule);
    return ClientSchemaModule;
}());
exports.ClientSchemaModule = ClientSchemaModule;
