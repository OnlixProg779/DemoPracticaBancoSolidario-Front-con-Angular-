"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navServices) {
        this.navServices = navServices;
        this.right_sidebar = false;
        this.open = false;
        this.openNav = false;
        this.rightSidebarEvent = new core_1.EventEmitter();
    }
    HeaderComponent.prototype.collapseSidebar = function () {
        this.open = !this.open;
        this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
    };
    HeaderComponent.prototype.right_side_bar = function () {
        this.right_sidebar = !this.right_sidebar;
        this.rightSidebarEvent.emit(this.right_sidebar);
    };
    HeaderComponent.prototype.openMobileNav = function () {
        this.openNav = !this.openNav;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
    };
    __decorate([
        core_1.Output()
    ], HeaderComponent.prototype, "rightSidebarEvent");
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
