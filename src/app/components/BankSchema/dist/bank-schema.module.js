"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BankSchemaModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var bank_schema_routing_module_1 = require("./bank-schema-routing.module");
var bill_form_component_1 = require("./components/Bill/bill-form/bill-form.component");
var type_bill_form_component_1 = require("./components/TypeBill/type-bill-form/type-bill-form.component");
var bill_create_component_1 = require("./components/Bill/bill-create/bill-create.component");
var type_bill_create_component_1 = require("./components/TypeBill/type-bill-create/type-bill-create.component");
var bill_list_component_1 = require("./components/Bill/bill-list/bill-list.component");
var type_bill_list_component_1 = require("./components/TypeBill/type-bill-list/type-bill-list.component");
var bill_patch_component_1 = require("./components/Bill/bill-patch/bill-patch.component");
var type_bill_patch_component_1 = require("./components/TypeBill/type-bill-patch/type-bill-patch.component");
var shared_module_1 = require("src/app/shared/shared.module");
var BankSchemaModule = /** @class */ (function () {
    function BankSchemaModule() {
    }
    BankSchemaModule = __decorate([
        core_1.NgModule({
            declarations: [
                bill_form_component_1.BillFormComponent,
                type_bill_form_component_1.TypeBillFormComponent,
                bill_create_component_1.BillCreateComponent,
                type_bill_create_component_1.TypeBillCreateComponent,
                bill_list_component_1.BillListComponent,
                type_bill_list_component_1.TypeBillListComponent,
                bill_patch_component_1.BillPatchComponent,
                type_bill_patch_component_1.TypeBillPatchComponent,
            ],
            imports: [
                common_1.CommonModule,
                bank_schema_routing_module_1.BankSchemaRoutingModule,
                shared_module_1.SharedModule
            ]
        })
    ], BankSchemaModule);
    return BankSchemaModule;
}());
exports.BankSchemaModule = BankSchemaModule;
