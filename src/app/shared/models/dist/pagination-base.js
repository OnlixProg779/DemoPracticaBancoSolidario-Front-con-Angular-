"use strict";
exports.__esModule = true;
exports.GetParamsStandar = exports.PaginationBase = void 0;
var http_1 = require("@angular/common/http");
var ng2_smart_table_1 = require("ng2-smart-table");
var PaginationBase = /** @class */ (function () {
    function PaginationBase() {
        this.sort = null;
        this.searchQuery = null;
        this.pageIndex = null; // es CurrentPage
        this.pageSize = null;
        this.isPaging = null;
        this.source = new ng2_smart_table_1.LocalDataSource();
    }
    PaginationBase.prototype.resetParams = function () {
        this.searchQuery = null;
        this.sort = null;
    };
    return PaginationBase;
}());
exports.PaginationBase = PaginationBase;
function GetParamsStandar(prename, options) {
    if (prename === void 0) { prename = ""; }
    if (prename == "undefined" || prename == undefined || prename == null) {
        prename = "";
    }
    var params = new http_1.HttpParams();
    if (options.active != null) {
        params = params.append(prename + ".Active", options.active);
    }
    if (options.showToUserMed != null) {
        params = params.append(prename + ".ShowToUserMed", options.showToUserMed);
    }
    if (options.createdDateFrom != null) {
        params = params.append(prename + ".CreatedDateFrom", options.createdDateFrom.toString());
    }
    if (options.createdDateTo != null) {
        params = params.append(prename + ".CreatedDateTo", options.createdDateTo.toString());
    }
    if (options.createdBy != null) {
        params = params.append(prename + ".CreatedBy", options.createdBy);
    }
    if (options.lastModifiedDateFrom != null) {
        params = params.append(prename + ".LastModifiedDateFrom", options.lastModifiedDateFrom.toString());
    }
    if (options.lastModifiedDateTo != null) {
        params = params.append(prename + ".LastModifiedDateTo", options.lastModifiedDateTo.toString());
    }
    if (options.lastModifiedBy != null) {
        params = params.append(prename + ".LastModifiedBy", options.lastModifiedBy);
    }
    if (options.editable != null) {
        params = params.append(prename + ".Editable", options.editable);
    }
    if (options.borrable != null) {
        params = params.append(prename + ".Borrable", options.borrable);
    }
    return params;
}
exports.GetParamsStandar = GetParamsStandar;
