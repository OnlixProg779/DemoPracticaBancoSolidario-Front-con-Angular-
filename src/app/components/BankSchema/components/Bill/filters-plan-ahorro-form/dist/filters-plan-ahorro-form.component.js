"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FiltersPlanAhorroFormComponent = void 0;
var core_1 = require("@angular/core");
var FiltersPlanAhorroFormComponent = /** @class */ (function () {
    function FiltersPlanAhorroFormComponent() {
        this.showFiltersGenericsPlanAhorro = false;
        this.showFiltersParticular = false;
    }
    FiltersPlanAhorroFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], FiltersPlanAhorroFormComponent.prototype, "optionsBill");
    __decorate([
        core_1.Input()
    ], FiltersPlanAhorroFormComponent.prototype, "showFiltersGenericsPlanAhorro");
    __decorate([
        core_1.Input()
    ], FiltersPlanAhorroFormComponent.prototype, "showFiltersParticular");
    FiltersPlanAhorroFormComponent = __decorate([
        core_1.Component({
            selector: 'app-filters-plan-ahorro-form',
            templateUrl: './filters-plan-ahorro-form.component.html',
            styleUrls: ['./filters-plan-ahorro-form.component.scss']
        })
    ], FiltersPlanAhorroFormComponent);
    return FiltersPlanAhorroFormComponent;
}());
exports.FiltersPlanAhorroFormComponent = FiltersPlanAhorroFormComponent;
