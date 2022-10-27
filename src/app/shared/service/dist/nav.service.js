"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.NavService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var windows_service_1 = require("./windows.service");
var NavService = /** @class */ (function () {
    function NavService(window) {
        this.window = window;
        this.collapseSidebar = false;
        this.MENUITEMS = [
            {
                path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false
            },
            {
                title: 'Clients', icon: 'users', type: 'sub', active: false, children: [
                    { path: '/clients/list-client', title: 'Client List', type: 'link' },
                ]
            },
            {
                title: 'Bank', icon: 'dollar-sign', type: 'sub', active: false, children: [
                    { path: '/bank/list-bills', title: 'Bills', type: 'link' },
                    {
                        title: 'Settings', type: 'sub', children: [
                            { path: '/bank/settings/type-bill', title: 'Type of Bills', type: 'link' },
                        ]
                    },
                ]
            },
        ];
        // Array
        this.items = new rxjs_1.BehaviorSubject(this.MENUITEMS);
        this.onResize();
        if (this.screenWidth < 991) {
            this.collapseSidebar = true;
        }
    }
    // Windows width
    NavService.prototype.onResize = function (event) {
        this.screenWidth = window.innerWidth;
    };
    __decorate([
        core_1.HostListener("window:resize", ['$event'])
    ], NavService.prototype, "onResize");
    NavService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(0, core_1.Inject(windows_service_1.WINDOW))
    ], NavService);
    return NavService;
}());
exports.NavService = NavService;
