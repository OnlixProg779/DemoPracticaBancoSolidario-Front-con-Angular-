"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BillListComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var functionsShared_1 = require("src/app/shared/functions/functionsShared");
var multi_sel_component_1 = require("src/app/shared/multi-sel/multi-sel.component");
var PlanAhorroFunctions_1 = require("../../../functions/PlanAhorro/PlanAhorroFunctions");
var options_bill_1 = require("../../../models/Bill/options-bill");
var BillListComponent = /** @class */ (function () {
    function BillListComponent(billService, utilsService, getSettingsService) {
        this.billService = billService;
        this.utilsService = utilsService;
        this.getSettingsService = getSettingsService;
        this.optionsBill = null;
        this.showFiltersGenericsClient = false;
        this.showFiltersParticular = false;
        this.color1 = "btn btn-dark";
        this.color3 = "btn btn-dark";
        this.clientSelected = null;
        this.optionsBill = new options_bill_1.OptionsBill();
    }
    BillListComponent.prototype.ngOnInit = function () {
        this.initSettings();
        PlanAhorroFunctions_1.GetPlanesDeAhorro(this.billService, this.optionsBill, this.utilsService);
        this.initOnChagedDataTable();
    };
    BillListComponent.prototype.changeShowPerPage = function (event) {
        functionsShared_1.ChangeShowSourcePerPage(this.optionsBill, event);
    };
    BillListComponent.prototype.initOnChagedDataTable = function () {
        var _this = this;
        this.optionsBill.source.onChanged().subscribe(function (change) {
            if (change.action === 'paging') {
                if (_this.optionsBill.source.count() <= change.paging.perPage) {
                    _this.changePagueSourcePlanAhorro(1);
                }
            }
            if (change.action === 'page') {
                _this.changePagueSourcePlanAhorro(change.paging.page);
            }
        });
    };
    BillListComponent.prototype.changePagueSourcePlanAhorro = function (pageIndex) {
        var getNew = pageIndex * this.optionsBill.showPerPage;
        if (getNew >= this.optionsBill.source.count() && getNew < this.optionsBill.totalCount) {
            this.optionsBill.pageIndex = this.optionsBill.pageIndex + 1;
            PlanAhorroFunctions_1.GetPlanesDeAhorroNextPage(this.billService, this.optionsBill, this.utilsService);
        }
    };
    BillListComponent.prototype.searchData = function () {
        this.optionsBill.pageIndex = 1;
        PlanAhorroFunctions_1.GetPlanesDeAhorro(this.billService, this.optionsBill, this.utilsService);
    };
    BillListComponent.prototype.showFiltersGenericsClientAction = function () {
        if (this.color3 == "btn btn-dark") {
            this.showFiltersGenericsClient = true;
            this.showFiltersParticular = false;
            this.color3 = "btn btn-info";
            this.color1 = "btn btn-dark";
        }
        else {
            this.color3 = "btn btn-dark";
            this.showFiltersGenericsClient = false;
        }
    };
    BillListComponent.prototype.showFiltersParticularAction = function () {
        if (this.color1 == "btn btn-dark") {
            this.showFiltersParticular = true;
            this.showFiltersGenericsClient = false;
            this.color1 = "btn btn-info";
            this.color3 = "btn btn-dark";
        }
        else {
            this.showFiltersParticular = false;
            this.color1 = "btn btn-dark";
        }
    };
    BillListComponent.prototype.resetParams = function () {
        this.optionsBill.resetParams();
        this.optionsBill.planAhorroPaginParams.resetParams();
    };
    BillListComponent.prototype.initSettings = function () {
        var _this = this;
        this.optionsBill.settings = {
            mode: 'external',
            pager: {
                display: true,
                perPage: this.optionsBill.showPerPage
            },
            actions: {
                add: false,
                edit: false,
                "delete": false,
                position: 'right'
            },
            columns: {
                createdDate: {
                    title: 'Since',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        sentData.icon = [];
                        if (!row.active) {
                            sentData.action.push(new common_1.DatePipe('en-US').transform(value, 'd/MMM/yyyy'));
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: #de1e1e;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        else {
                            sentData.action.push(new common_1.DatePipe('en-US').transform(value, 'd/MMM/yyyy'));
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:black;cursor: auto;');
                            sentData.action.push(new common_1.DatePipe('en-US').transform(value, 'h:mm a'));
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:black;cursor: auto;');
                        }
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent
                },
                cuenta: {
                    title: 'Ver Proyeccion',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        sentData.icon = [];
                        if (row.active) {
                            sentData.action.push("Revisar");
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: #047aa2;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.8em 0.8em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (item) {
                            console.log(item);
                            if (item.option == 'Revisar') {
                                console.log(item);
                                _this.clientSelected = item.entity;
                            }
                        });
                    }
                },
                clientRemote: {
                    title: 'Cliente',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        sentData.icon = [];
                        sentData.action.push("" + value.nombre);
                        sentData.stepClass.push('btn btn-outline ');
                        sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 115%;color:dark;cursor: auto;');
                        sentData.action.push("CI. " + value.cedula);
                        sentData.stepClass.push('btn btn-outline btn-sm');
                        sentData.styl.push('background-color: #c3ddf3;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:#060505;cursor: auto;');
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                    }
                },
                montoDeAhorro: {
                    title: 'montoDeAhorro',
                    filter: false,
                    valuePrepareFunction: function (value, row, cell) {
                        return "$" + value;
                    }
                },
                location: {
                    title: 'Info',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        sentData.icon = [];
                        if (!row.active) {
                            sentData.action.push("Interes " + row.tiempoPlanDeAhorro.tipoDeInteres);
                            sentData.stepClass.push('btn btn-success');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push("X " + row.tiempoPlanDeAhorro.meses + " meses");
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push(row.tiempoPlanDeAhorro.tasaDeInteresAnual + "% de interes anual");
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        else {
                            sentData.action.push("Interes " + row.tiempoPlanDeAhorro.tipoDeInteres);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: #4187d2;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push("X " + row.tiempoPlanDeAhorro.meses + " meses");
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
                            sentData.action.push(row.tiempoPlanDeAhorro.tasaDeInteresAnual + "% de interes anual");
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
                        }
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                    }
                },
                control: {
                    title: 'Control',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        sentData.icon = [];
                        if (!row.active) {
                            sentData.action.push("Deleted");
                            sentData.stepClass.push('btn btn-outline col-12');
                            sentData.styl.push('background-color: #de1e1e;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        else {
                            sentData.action.push("Active");
                            sentData.stepClass.push('btn btn-outline col-12');
                            sentData.styl.push('background-color: #1e7915;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        if (!row.borrable) {
                            sentData.action.push("No Erasable");
                            sentData.stepClass.push('btn btn-outline col-12');
                            sentData.styl.push('background-color: #de1e1e;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        else {
                            sentData.action.push("Erasable");
                            sentData.stepClass.push('btn btn-outline col-12');
                            sentData.styl.push('background-color: #1e7915;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        if (!row.editable) {
                            sentData.action.push("No Editable");
                            sentData.stepClass.push('btn btn-outline col-12');
                            sentData.styl.push('background-color: #de1e1e;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        else {
                            sentData.action.push("Editable");
                            sentData.stepClass.push('btn btn-outline col-12');
                            sentData.styl.push('background-color: #1e7915;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        if (!row.showToUserMed) {
                            sentData.action.push("No Visible");
                            sentData.stepClass.push('btn btn-outline col-12');
                            sentData.styl.push('background-color: #de1e1e;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        else {
                            sentData.action.push("Visible");
                            sentData.stepClass.push('btn btn-outline col-12');
                            sentData.styl.push('background-color: #1e7915;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                    }
                },
                actions: {
                    title: 'A',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        sentData.icon = [];
                        if (!row.active) {
                            sentData.action.push("Restore");
                            sentData.icon.push("rotate-ccw");
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:black;cursor: pointer;');
                        }
                        else {
                            sentData.action.push("Delete");
                            sentData.icon.push("delete");
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:red;cursor: pointer;');
                        }
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (item) {
                            console.log(item);
                            if (item.option == 'Restore') {
                            }
                            if (item.option == 'Delete') {
                            }
                            // this.router.navigate(['/clients/bills/' + item.entity.receivedBox.postBox.client.clientId]);
                        });
                    }
                }
            }
        };
    };
    BillListComponent = __decorate([
        core_1.Component({
            selector: 'app-bill-list',
            templateUrl: './bill-list.component.html',
            styleUrls: ['./bill-list.component.scss']
        })
    ], BillListComponent);
    return BillListComponent;
}());
exports.BillListComponent = BillListComponent;
