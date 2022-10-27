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
exports.PlanAhorroPaginParams = exports.OptionsBill = void 0;
var pagination_base_1 = require("src/app/shared/models/pagination-base");
var standar_base_query_1 = require("src/app/shared/models/standar-base-query");
var OptionsBill = /** @class */ (function (_super) {
    __extends(OptionsBill, _super);
    function OptionsBill() {
        var _this = _super.call(this) || this;
        _this.planAhorroPaginParams = null;
        _this.showPerPage = 5;
        _this.totalCount = 0;
        _this.planAhorroPaginParams = new PlanAhorroPaginParams();
        _this.pageSize = 15;
        _this.pageIndex = 1;
        _this.isPaging = true;
        return _this;
    }
    return OptionsBill;
}(pagination_base_1.PaginationBase));
exports.OptionsBill = OptionsBill;
var PlanAhorroPaginParams = /** @class */ (function (_super) {
    __extends(PlanAhorroPaginParams, _super);
    function PlanAhorroPaginParams() {
        var _this = _super.call(this) || this;
        _this.clientRef = null;
        _this.montoDeAhorro = null;
        _this.tiempoPlanDeAhorroId = null;
        return _this;
    }
    PlanAhorroPaginParams.prototype.resetParams = function () {
        this.clientRef = null;
        this.montoDeAhorro = null;
        this.tiempoPlanDeAhorroId = null;
    };
    return PlanAhorroPaginParams;
}(standar_base_query_1.StandarBaseQuery));
exports.PlanAhorroPaginParams = PlanAhorroPaginParams;
