"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FiltersClientFormComponent = void 0;
var core_1 = require("@angular/core");
var FiltersClientFormComponent = /** @class */ (function () {
    function FiltersClientFormComponent() {
        this.showFiltersGenericsClient = false;
        this.showFiltersParticular = false;
    }
    FiltersClientFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], FiltersClientFormComponent.prototype, "optionsClient");
    __decorate([
        core_1.Input()
    ], FiltersClientFormComponent.prototype, "showFiltersGenericsClient");
    __decorate([
        core_1.Input()
    ], FiltersClientFormComponent.prototype, "showFiltersParticular");
    FiltersClientFormComponent = __decorate([
        core_1.Component({
            selector: 'app-filters-client-form',
            templateUrl: './filters-client-form.component.html',
            styleUrls: ['./filters-client-form.component.scss']
        })
    ], FiltersClientFormComponent);
    return FiltersClientFormComponent;
}());
exports.FiltersClientFormComponent = FiltersClientFormComponent;
