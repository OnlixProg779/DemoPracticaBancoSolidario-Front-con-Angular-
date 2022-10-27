"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientStandardFiltersComponent = void 0;
var core_1 = require("@angular/core");
var ClientStandardFiltersComponent = /** @class */ (function () {
    function ClientStandardFiltersComponent() {
        this.showFilters = false;
    }
    ClientStandardFiltersComponent.prototype.ngOnInit = function () {
    };
    ClientStandardFiltersComponent.prototype.showFiltersAction = function () {
        this.showFilters = !this.showFilters;
    };
    __decorate([
        core_1.Input()
    ], ClientStandardFiltersComponent.prototype, "showFilters");
    __decorate([
        core_1.Input()
    ], ClientStandardFiltersComponent.prototype, "params");
    ClientStandardFiltersComponent = __decorate([
        core_1.Component({
            selector: 'app-client-standard-filters',
            templateUrl: './client-standard-filters.component.html',
            styleUrls: ['./client-standard-filters.component.scss']
        })
    ], ClientStandardFiltersComponent);
    return ClientStandardFiltersComponent;
}());
exports.ClientStandardFiltersComponent = ClientStandardFiltersComponent;
