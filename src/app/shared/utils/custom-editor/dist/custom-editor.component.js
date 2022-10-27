"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomEditorComponent = void 0;
var core_1 = require("@angular/core");
var ng2_smart_table_1 = require("ng2-smart-table");
var CustomEditorComponent = /** @class */ (function (_super) {
    __extends(CustomEditorComponent, _super);
    function CustomEditorComponent() {
        return _super.call(this) || this;
    }
    CustomEditorComponent.prototype.ngAfterViewInit = function () {
        if (this.cell.newValue !== '') {
            this.name.nativeElement.value = this.getUrlName();
            this.url.nativeElement.value = this.getUrlHref();
        }
    };
    CustomEditorComponent.prototype.updateValue = function () {
        var href = this.url.nativeElement.value;
        var name = this.name.nativeElement.value;
        this.cell.newValue = "<a href='" + href + "'>" + name + "</a>";
    };
    CustomEditorComponent.prototype.getUrlName = function () {
        return this.htmlValue.nativeElement.innerText;
    };
    CustomEditorComponent.prototype.getUrlHref = function () {
        return this.htmlValue.nativeElement.querySelector('a').getAttribute('href');
    };
    CustomEditorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('name')
    ], CustomEditorComponent.prototype, "name");
    __decorate([
        core_1.ViewChild('url')
    ], CustomEditorComponent.prototype, "url");
    __decorate([
        core_1.ViewChild('htmlValue')
    ], CustomEditorComponent.prototype, "htmlValue");
    CustomEditorComponent = __decorate([
        core_1.Component({
            selector: 'app-custom-editor',
            templateUrl: './custom-editor.component.html',
            styleUrls: ['./custom-editor.component.scss']
        })
    ], CustomEditorComponent);
    return CustomEditorComponent;
}(ng2_smart_table_1.DefaultEditor));
exports.CustomEditorComponent = CustomEditorComponent;
