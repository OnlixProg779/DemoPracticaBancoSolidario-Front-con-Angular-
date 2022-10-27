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
exports.TiempoPlanDeAhorroPaginParams = exports.OptionsTypeBill = void 0;
var pagination_base_1 = require("src/app/shared/models/pagination-base");
var standar_base_query_1 = require("src/app/shared/models/standar-base-query");
var OptionsTypeBill = /** @class */ (function (_super) {
    __extends(OptionsTypeBill, _super);
    function OptionsTypeBill() {
        var _this = _super.call(this) || this;
        _this.tiempoPlanDeAhorroPaginParams = null;
        _this.showPerPage = 5;
        _this.totalCount = 0;
        _this.tiempoPlanDeAhorroPaginParams = new TiempoPlanDeAhorroPaginParams();
        _this.pageSize = 15;
        _this.pageIndex = 1;
        _this.isPaging = true;
        return _this;
    }
    return OptionsTypeBill;
}(pagination_base_1.PaginationBase));
exports.OptionsTypeBill = OptionsTypeBill;
var TiempoPlanDeAhorroPaginParams = /** @class */ (function (_super) {
    __extends(TiempoPlanDeAhorroPaginParams, _super);
    function TiempoPlanDeAhorroPaginParams() {
        var _this = _super.call(this) || this;
        _this.meses = null;
        _this.tasaDeInteresAnual = null;
        _this.tipoDeInteres = null;
        return _this;
    }
    TiempoPlanDeAhorroPaginParams.prototype.resetParams = function () {
        this.meses = null;
        this.tasaDeInteresAnual = null;
        this.tipoDeInteres = null;
    };
    return TiempoPlanDeAhorroPaginParams;
}(standar_base_query_1.StandarBaseQuery));
exports.TiempoPlanDeAhorroPaginParams = TiempoPlanDeAhorroPaginParams;
