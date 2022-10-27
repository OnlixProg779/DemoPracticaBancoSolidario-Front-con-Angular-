"use strict";
exports.__esModule = true;
exports.content = void 0;
exports.content = [
    {
        path: 'dashboard',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../../components/dashboard/dashboard.module'); }).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'clients',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../../components/ClientSchema/client-schema.module'); }).then(function (m) { return m.ClientSchemaModule; }); },
        data: {
            breadcrumb: "Client"
        }
    },
    {
        path: 'bank',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../../components/BankSchema/bank-schema.module'); }).then(function (m) { return m.BankSchemaModule; }); },
        data: {
            breadcrumb: "Bank"
        }
    },
];
