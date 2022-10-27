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
exports.__esModule = true;
exports.ApplicationUserVm = void 0;
var base_domain_model_1 = require("src/app/shared/models/base-domain-model");
var ApplicationUserVm = /** @class */ (function (_super) {
    __extends(ApplicationUserVm, _super);
    function ApplicationUserVm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApplicationUserVm;
}(base_domain_model_1.BaseDomainModel));
exports.ApplicationUserVm = ApplicationUserVm;
