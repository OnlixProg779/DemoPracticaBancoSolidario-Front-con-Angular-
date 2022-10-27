"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListSmartGenericComponent = void 0;
var core_1 = require("@angular/core");
var ListSmartGenericComponent = /** @class */ (function () {
    function ListSmartGenericComponent() {
        this.tittle = null;
        this.showQuickFilters = true;
        this.showButtonSearchFilters = true;
        this.changeShowPerPage = new core_1.EventEmitter();
    }
    ListSmartGenericComponent.prototype.ngOnInit = function () {
    };
    ListSmartGenericComponent.prototype.ngOnChanges = function (changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(changes);
    };
    ListSmartGenericComponent.prototype.changeSettingsTable = function () {
        // console.log(this.showPerPage);
        this.changeShowPerPage.emit(this.showPerPage);
    };
    __decorate([
        core_1.Input()
    ], ListSmartGenericComponent.prototype, "tittle");
    __decorate([
        core_1.Input()
    ], ListSmartGenericComponent.prototype, "showQuickFilters");
    __decorate([
        core_1.Input()
    ], ListSmartGenericComponent.prototype, "showButtonSearchFilters");
    __decorate([
        core_1.Input()
    ], ListSmartGenericComponent.prototype, "settings");
    __decorate([
        core_1.Input()
    ], ListSmartGenericComponent.prototype, "source");
    __decorate([
        core_1.Input()
    ], ListSmartGenericComponent.prototype, "totalCount");
    __decorate([
        core_1.Input()
    ], ListSmartGenericComponent.prototype, "showPerPage");
    __decorate([
        core_1.Output()
    ], ListSmartGenericComponent.prototype, "changeShowPerPage");
    ListSmartGenericComponent = __decorate([
        core_1.Component({
            selector: 'app-list-smart-generic',
            templateUrl: './list-smart-generic.component.html',
            styleUrls: ['./list-smart-generic.component.scss']
        })
    ], ListSmartGenericComponent);
    return ListSmartGenericComponent;
}());
exports.ListSmartGenericComponent = ListSmartGenericComponent;
