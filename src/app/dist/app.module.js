"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dashboard_module_1 = require("./components/dashboard/dashboard.module");
// import { SharedModule } from './shared/shared.module';
var auth_module_1 = require("./components/auth/auth.module");
var ngx_image_compress_1 = require("ngx-image-compress");
var bank_schema_module_1 = require("./components/BankSchema/bank-schema.module");
var client_schema_module_1 = require("./components/ClientSchema/client-schema.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'serverApp' }),
                app_routing_module_1.AppRoutingModule,
                auth_module_1.AuthModule,
                bank_schema_module_1.BankSchemaModule,
                client_schema_module_1.ClientSchemaModule,
                dashboard_module_1.DashboardModule,
            ],
            providers: [ngx_image_compress_1.NgxImageCompressService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
