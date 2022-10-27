"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResourceMultiSel = exports.SentActionPatchDeposit = exports.MultiSelComponent = void 0;
var core_1 = require("@angular/core");
var MultiSelComponent = /** @class */ (function () {
    function MultiSelComponent() {
        this.model = new ResourceMultiSel();
        this.save = new core_1.EventEmitter();
    }
    MultiSelComponent.prototype.ngOnInit = function () {
        this.separarData(this.value);
    };
    MultiSelComponent.prototype.separarData = function (value) {
        this.model.action = value.action;
        this.model.renderOptions = value.renderOptions;
        this.model.stepClass = value.stepClass;
        this.model.styl = value.styl;
        this.model.icon = value.icon;
    };
    MultiSelComponent.prototype.onClick = function (action) {
        var aux = new SentActionPatchDeposit();
        aux.entity = this.rowData;
        aux.option = action;
        this.save.emit(aux);
    };
    __decorate([
        core_1.Input()
    ], MultiSelComponent.prototype, "value");
    __decorate([
        core_1.Input()
    ], MultiSelComponent.prototype, "rowData");
    __decorate([
        core_1.Output()
    ], MultiSelComponent.prototype, "save");
    MultiSelComponent = __decorate([
        core_1.Component({
            selector: 'app-multi-sel',
            templateUrl: './multi-sel.component.html',
            styleUrls: ['./multi-sel.component.scss']
        })
    ], MultiSelComponent);
    return MultiSelComponent;
}());
exports.MultiSelComponent = MultiSelComponent;
var SentActionPatchDeposit = /** @class */ (function () {
    function SentActionPatchDeposit() {
    }
    return SentActionPatchDeposit;
}());
exports.SentActionPatchDeposit = SentActionPatchDeposit;
var ResourceMultiSel = /** @class */ (function () {
    function ResourceMultiSel() {
    }
    return ResourceMultiSel;
}());
exports.ResourceMultiSel = ResourceMultiSel;
