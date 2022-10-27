"use strict";
exports.__esModule = true;
exports.GetClientsNextPage = exports.GetClients = exports.GetParamsClients = void 0;
var pagination_base_1 = require("src/app/shared/models/pagination-base");
function GetParamsClients(callClass, optionsClient) {
    if (callClass === void 0) { callClass = ""; }
    if (callClass == "undefined" || callClass == undefined || callClass == null) {
        callClass = "";
    }
    var params = pagination_base_1.GetParamsStandar(callClass + "clientPaginParams", optionsClient);
    if (optionsClient.cedula != null) {
        params = params.append(callClass + "clientPaginParams.Cedula", optionsClient.cedula);
    }
    if (optionsClient.nombre != null) {
        params = params.append(callClass + "clientPaginParams.Nombre", optionsClient.nombre);
    }
    return params;
}
exports.GetParamsClients = GetParamsClients;
function GetClients(clientService, optionsClient, utilsService) {
    GetClientsDb(clientService, optionsClient, utilsService, "GetAll");
}
exports.GetClients = GetClients;
function GetClientsNextPage(clientService, optionsClient, utilsService) {
    GetClientsDb(clientService, optionsClient, utilsService, "NextPage");
}
exports.GetClientsNextPage = GetClientsNextPage;
function GetClientsDb(clientService, optionsClient, utilsService, callbackMetod) {
    var params = null;
    var paramsClient = GetParamsClients(null, optionsClient.clientsPaginParams);
    utilsService.concatHttpParams([paramsClient]).subscribe(function (result) {
        params = result;
        if (optionsClient.searchQuery != null) {
            params = params.append("SearchQuery", optionsClient.searchQuery);
        }
        if (optionsClient.sort != null) {
            params = params.append("Sort", optionsClient.sort);
        }
        if (optionsClient.isPaging != null) {
            params = params.append("IsPaging", optionsClient.isPaging);
        }
        if (optionsClient.pageIndex != null) {
            params = params.append("PageIndex", optionsClient.pageIndex.toString());
        }
        if (optionsClient.pageSize != null) {
            params = params.append("PageSize", optionsClient.pageSize.toString());
        }
        clientService
            .getAllClients(params)
            .subscribe(function (result) {
            if (!result) {
                return;
            }
            if (result.status == 200) {
                if (callbackMetod == "GetAll") {
                    optionsClient.source.load(result.body);
                    optionsClient.totalCount = JSON.parse(result.headers.get('X-Pagination'));
                    optionsClient.totalCount = optionsClient.totalCount['totalCount'];
                }
                else if ("NextPage") {
                    result.body.forEach(function (element) {
                        optionsClient.source.add(element);
                    });
                }
            }
        }, function (err) {
            console.warn(err);
        });
    }, function (err) {
        console.warn(err);
    });
}
