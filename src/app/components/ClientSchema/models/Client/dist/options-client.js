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
exports.ClientsPaginParams = exports.OptionsClient = void 0;
var pagination_base_1 = require("src/app/shared/models/pagination-base");
var standar_base_query_1 = require("src/app/shared/models/standar-base-query");
var OptionsClient = /** @class */ (function (_super) {
    __extends(OptionsClient, _super);
    function OptionsClient() {
        var _this = _super.call(this) || this;
        // parameters de busqueda
        _this.clientsPaginParams = null;
        _this.showPerPage = 5;
        _this.totalCount = 0;
        _this.clientsPaginParams = new ClientsPaginParams();
        _this.pageSize = 15;
        _this.pageIndex = 1;
        _this.isPaging = true;
        return _this;
    }
    return OptionsClient;
}(pagination_base_1.PaginationBase));
exports.OptionsClient = OptionsClient;
var ClientsPaginParams = /** @class */ (function (_super) {
    __extends(ClientsPaginParams, _super);
    function ClientsPaginParams() {
        var _this = _super.call(this) || this;
        _this.cedula = null;
        _this.nombre = null;
        return _this;
    }
    ClientsPaginParams.prototype.resetParams = function () {
        this.cedula = null;
        this.nombre = null;
    };
    return ClientsPaginParams;
}(standar_base_query_1.StandarBaseQuery));
exports.ClientsPaginParams = ClientsPaginParams;
