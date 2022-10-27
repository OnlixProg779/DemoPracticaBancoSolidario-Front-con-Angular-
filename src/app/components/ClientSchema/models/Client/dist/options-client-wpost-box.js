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
exports.ClientsWPostBoxPaginParams = exports.OptionsClientWPostBox = void 0;
var pagination_base_1 = require("src/app/shared/models/pagination-base");
var options_client_1 = require("./options-client");
var OptionsClientWPostBox = /** @class */ (function (_super) {
    __extends(OptionsClientWPostBox, _super);
    function OptionsClientWPostBox() {
        var _this = _super.call(this) || this;
        // parameters de busqueda
        _this.clientsWPostBoxPaginParams = null;
        _this.showPerPage = 5;
        _this.totalCount = 0;
        _this.clientsWPostBoxPaginParams = new ClientsWPostBoxPaginParams();
        _this.pageSize = 15;
        _this.pageIndex = 1;
        _this.isPaging = true;
        return _this;
    }
    return OptionsClientWPostBox;
}(pagination_base_1.PaginationBase));
exports.OptionsClientWPostBox = OptionsClientWPostBox;
var ClientsWPostBoxPaginParams = /** @class */ (function () {
    function ClientsWPostBoxPaginParams() {
        this.clientsPaginParams = null;
        this.applicationUserPaginParams = null;
        this.clientsPaginParams = new options_client_1.ClientsPaginParams();
        this.applicationUserPaginParams = new options_client_1.ApplicationUserPaginParams();
    }
    return ClientsWPostBoxPaginParams;
}());
exports.ClientsWPostBoxPaginParams = ClientsWPostBoxPaginParams;
// export function GetParamsClientsWPostBox(callClass:string = "",optionsClient: OptionsClientWPostBox): HttpParams {
//     console.log(optionsClient)
//       let params = GetParamsClients(`${callClass}clientsPaginParams`,optionsClient.clientsPaginParams,optionsClient);
//       // if (optionsClient.clientsPaginParams.gender != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Gender`, optionsClient.clientsPaginParams.gender);
//       // }
//       // if (optionsClient.clientsPaginParams.dni != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Dni`, optionsClient.clientsPaginParams.dni);
//       // }
//       // if (optionsClient.clientsPaginParams.serie != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Serie`, optionsClient.clientsPaginParams.serie);
//       // }
//       // if (optionsClient.clientsPaginParams.type != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Type`, optionsClient.clientsPaginParams.type);
//       // }
//       // if (optionsClient.clientsPaginParams.agencyId != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.AgencyId`, optionsClient.clientsPaginParams.agencyId);
//       // }
//       // if (optionsClient.clientsPaginParams.city != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.City`, optionsClient.clientsPaginParams.city);
//       // }
//       // if (optionsClient.clientsPaginParams.instagram != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Instagram`, optionsClient.clientsPaginParams.instagram);
//       // }
//       // if (optionsClient.applicationUserPaginParams.phone != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Phone`, optionsClient.applicationUserPaginParams.phone);
//       // }
//       // if (optionsClient.applicationUserPaginParams.country != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Country`, optionsClient.applicationUserPaginParams.country);
//       // }
//       // if (optionsClient.applicationUserPaginParams.dateOfBirth != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.DateOfBirth`, optionsClient.applicationUserPaginParams.dateOfBirth.toString());
//       // }
//       return params;
//   }
