"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var button_view_component_1 = require("src/app/shared/button-view/button-view.component");
var multi_sel_component_1 = require("src/app/shared/multi-sel/multi-sel.component");
var environment_1 = require("src/environments/environment");
var chartData = require("../../shared/data/chart");
var chart_1 = require("../../shared/data/chart");
var options_agency_1 = require("../agency/models/options-agency");
// import { UsLogIn } from '../auth/models/us-log-in';
var options_shipping_1 = require("../invoice/models/options-shipping");
var options_guide_international_1 = require("../pages/models/options-guide-international");
var DashboardComponent = /** @class */ (function () {
    // dataLogin: UsLogIn = null;
    function DashboardComponent(modalService, productService, serviceGuides, serviceShipping, router, serviceAgency) {
        this.modalService = modalService;
        this.productService = productService;
        this.serviceGuides = serviceGuides;
        this.serviceShipping = serviceShipping;
        this.router = router;
        this.serviceAgency = serviceAgency;
        this.doughnutData = chart_1.doughnutData;
        this.pieData = chart_1.pieData;
        this.productDtoToModal = null;
        this.filterThrottle = new rxjs_1.Subject();
        // GUIDES
        this.optionsGuide = new options_guide_international_1.OptionsGuide();
        this.guideDtoToModal = null;
        // Shipping
        this.optionsShipping = new options_shipping_1.OptionsShipping();
        this.shippingDtoToModal = null;
        // AGENCIES
        this.optionsAgency = new options_agency_1.OptionsAgency();
        // doughnut 2
        this.view = chartData.view;
        this.doughnutChartColorScheme = chartData.doughnutChartcolorScheme;
        this.doughnutChartShowLabels = chartData.doughnutChartShowLabels;
        this.doughnutChartGradient = chartData.doughnutChartGradient;
        this.doughnutChartTooltip = chartData.doughnutChartTooltip;
        this.chart5 = chartData.chart5;
        // lineChart
        this.lineChartData = chartData.lineChartData;
        this.lineChartLabels = chartData.lineChartLabels;
        this.lineChartOptions = chartData.lineChartOptions;
        this.lineChartColors = chartData.lineChartColors;
        this.lineChartLegend = chartData.lineChartLegend;
        this.lineChartType = chartData.lineChartType;
        // lineChart
        this.smallLineChartData = chartData.smallLineChartData;
        this.smallLineChartLabels = chartData.smallLineChartLabels;
        this.smallLineChartOptions = chartData.smallLineChartOptions;
        this.smallLineChartColors = chartData.smallLineChartColors;
        this.smallLineChartLegend = chartData.smallLineChartLegend;
        this.smallLineChartType = chartData.smallLineChartType;
        // lineChart
        this.smallLine2ChartData = chartData.smallLine2ChartData;
        this.smallLine2ChartLabels = chartData.smallLine2ChartLabels;
        this.smallLine2ChartOptions = chartData.smallLine2ChartOptions;
        this.smallLine2ChartColors = chartData.smallLine2ChartColors;
        this.smallLine2ChartLegend = chartData.smallLine2ChartLegend;
        this.smallLine2ChartType = chartData.smallLine2ChartType;
        // lineChart
        this.smallLine3ChartData = chartData.smallLine3ChartData;
        this.smallLine3ChartLabels = chartData.smallLine3ChartLabels;
        this.smallLine3ChartOptions = chartData.smallLine3ChartOptions;
        this.smallLine3ChartColors = chartData.smallLine3ChartColors;
        this.smallLine3ChartLegend = chartData.smallLine3ChartLegend;
        this.smallLine3ChartType = chartData.smallLine3ChartType;
        // lineChart
        this.smallLine4ChartData = chartData.smallLine4ChartData;
        this.smallLine4ChartLabels = chartData.smallLine4ChartLabels;
        this.smallLine4ChartOptions = chartData.smallLine4ChartOptions;
        this.smallLine4ChartColors = chartData.smallLine4ChartColors;
        this.smallLine4ChartLegend = chartData.smallLine4ChartLegend;
        this.smallLine4ChartType = chartData.smallLine4ChartType;
        this.chart3 = chartData.chart3;
        Object.assign(this, { doughnutData: chart_1.doughnutData, pieData: chart_1.pieData });
        // this.serviceUtils.getEmployeeLogin()
        //   .subscribe((value: UsLogIn) => {
        //     // this.dataLogin = value;
        //     this.constructorAgencies();
        //     this.guidesConstructor();
        //     this.shippingConstructor();
        //   }, (error) => {
        //     console.warn(error);
        //   }, () => {
        //     console.log("Finalizado");
        //   })
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterThrottle.pipe(operators_1.debounceTime(1000)).subscribe(function (input) {
            if (input && input.length == 7) {
                _this.getProductFromCode(input);
            }
        });
        this.initOnChagedDataGuides();
        this.initOnChagedDataShipping();
    };
    DashboardComponent.prototype.codeCharged = function (response) {
        if (response.identifier) {
            this.getProductFromCode(response.identifier);
        }
    };
    DashboardComponent.prototype.getProductFromCode = function (code) {
        var _this = this;
        this.productService.getProductFromCode(code, null, environment_1.environment.mediaTypes.products.getUnique.accept.getJson).subscribe(function (result) {
            console.log(result);
            if (!result) {
                return;
            }
            if (result.status == 200) {
                _this.codeProduct = "";
                _this.viewModalDetailProduct(result.body);
            }
        }, function (err) {
            console.warn(err);
        });
    };
    DashboardComponent.prototype.viewModalDetailProduct = function (entity) {
        this.productDtoToModal = null;
        this.shippingDtoToModal = null;
        this.guideDtoToModal = null;
        this.productDtoToModal = entity;
        this.openModal(this.contenidoDelModal, this.productDtoToModal, null);
    };
    DashboardComponent.prototype.openModal = function (content, entity, button) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason, entity, button);
        });
    };
    DashboardComponent.prototype.getDismissReason = function (reason, entity, button) {
        console.log(reason);
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else if (reason == 'accept') {
            // this.deleteDeposit(entity);
        }
        else {
            return "with: " + reason;
        }
    };
    DashboardComponent.prototype.guidesConstructor = function () {
        this.inicializarTablaGuides();
        this.optionsGuide.auxMediaTypeAccept = environment_1.environment.mediaTypes.guide.get.accept.getAllGuideJson;
        this.optionsGuide.active = true;
        // this.optionsGuide.destinationAgencyRef = this.dataLogin.agId;
        this.optionsGuide.orderBy = "date";
        this.optionsGuide.status = "PENDING";
        // this.optionsPostBox.serie = this.clientDto.serie;
        this.initDataGuides();
    };
    DashboardComponent.prototype.initDataGuides = function () {
        var _this = this;
        var params = new http_1.HttpParams();
        if (this.optionsGuide.active != null) {
            params = params.append('Active', this.optionsGuide.active);
        }
        if (this.optionsGuide.status != null) {
            params = params.append('status', this.optionsGuide.status);
        }
        if (this.optionsGuide.destinationAgencyRef != null) {
            params = params.append('destinationAgencyRef', this.optionsGuide.destinationAgencyRef);
        }
        if (this.optionsGuide.orderBy != null) {
            params = params.append('OrderBy', this.optionsGuide.orderBy);
        }
        if (this.optionsGuide.fields != null) {
            params = params.append('Fields', this.optionsGuide.fields);
        }
        params = params.append('PageNumber', this.optionsGuide.currentPage.toString());
        params = params.append('PageSize', this.optionsGuide.pageSize.toString());
        this.serviceGuides
            .getAllGuides(params, this.optionsGuide.auxMediaTypeAccept)
            .subscribe(function (result) {
            if (!result) {
                return;
            }
            if (result.status == 200) {
                if (_this.optionsGuide.auxMediaTypeAccept.toLowerCase().includes('hateoas')) {
                    _this.optionsGuide.source.load(result.body.value);
                    _this.optionsGuide.totalCount = JSON.parse(result.headers.get('X-Pagination'));
                    _this.optionsGuide.totalCount = _this.optionsGuide.totalCount['totalCount'];
                }
                else {
                    _this.optionsGuide.source.load(result.body);
                    console.log(JSON.parse(result.headers.get('X-Pagination')));
                    _this.optionsGuide.totalCount = JSON.parse(result.headers.get('X-Pagination'));
                    _this.optionsGuide.totalCount = _this.optionsGuide.totalCount['totalCount'];
                }
            }
        }, function (err) {
            console.warn(err);
        });
    };
    DashboardComponent.prototype.inicializarTablaGuides = function () {
        var _this = this;
        this.optionsGuide.settings = {
            mode: 'external',
            pager: {
                display: true,
                perPage: this.optionsGuide.showPerPage
            },
            actions: {
                add: false,
                edit: false,
                "delete": false,
                position: 'right'
            },
            columns: {
                date: {
                    title: 'Date',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        if (!row.active) {
                            sentData.action.push(new common_1.DatePipe('en-US').transform(value, 'd/MMM/yyyy'));
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
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
                employeeDelivery: {
                    title: 'Send By',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        if (!row.active) {
                            sentData.action.push("DELETED");
                            sentData.stepClass.push('btn btn-success');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push("" + row.companyCourrier);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push("# Guide: " + row.numGuide);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        else {
                            if (row.destinationAgencyRef == environment_1.environment.tuplas.agencies.ECLJ) {
                                sentData.action.push(row.companyCourrier + " to: ECLJ");
                                sentData.stepClass.push('btn btn-outline');
                                sentData.styl.push('background-color: darkgreen;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else if (row.destinationAgencyRef == environment_1.environment.tuplas.agencies.ECMH) {
                                sentData.action.push(row.companyCourrier + " to: ECMH");
                                sentData.stepClass.push('btn btn-outline');
                                sentData.styl.push('background-color: rgb(9, 84, 164);line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else if (row.destinationAgencyRef == environment_1.environment.tuplas.agencies.USA) {
                                sentData.action.push(row.companyCourrier + " to: USA");
                                sentData.stepClass.push('btn btn-outline');
                                sentData.styl.push('background-color: rgb(176, 153, 23)line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else {
                                sentData.action.push(row.companyCourrier + " to: Unknown Agency");
                                sentData.stepClass.push('btn btn-outline');
                                sentData.styl.push('background-color: red; line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            sentData.action.push("# Guide: " + row.numGuide);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
                            sentData.action.push("By: " + value);
                            sentData.stepClass.push('btn btn-outline ');
                            sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
                        }
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                    }
                },
                information: {
                    title: 'Info',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        if (!row.active) {
                            sentData.action.push("DELETED");
                            sentData.stepClass.push('btn btn-success');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push("Send: " + row.productsTotal);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push("Received: " + row.productsReceived);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        else {
                            if (row.status == 'COMPLETE') {
                                sentData.action.push("" + row.status);
                                sentData.stepClass.push('btn btn-success');
                                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else if (row.status == 'PENDING') {
                                sentData.action.push("" + row.status);
                                sentData.stepClass.push('btn btn-info');
                                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else if (row.status == 'INCOMPLETE') {
                                sentData.action.push("" + row.status);
                                sentData.stepClass.push('btn btn-warning');
                                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else if (row.status == 'EMPTY') {
                                sentData.action.push("EMPTY");
                                sentData.stepClass.push('btn btn-warning');
                                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else {
                                sentData.action.push("UNKNOWN");
                                sentData.stepClass.push('btn btn-dark');
                                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            sentData.action.push("Send: " + row.productsTotal);
                            sentData.stepClass.push('btn btn-outline ');
                            sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
                            sentData.action.push("Received: " + row.productsReceived);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
                        }
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                    }
                },
                button: {
                    title: 'Buttons',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        sentData.action.push('View Guide');
                        sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.50em 0.4em;display:inline-block;font-size: 100%;color:white;cursor: pointer;');
                        sentData.stepClass.push('btn btn-info');
                        sentData.entity = row;
                        sentData.action.push('Receive Products');
                        sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.50em 0.4em;display:inline-block;font-size: 100%;color:white;cursor: pointer;');
                        sentData.stepClass.push('btn btn-primary');
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (item) {
                            _this.guideDtoToModal = null;
                            _this.shippingDtoToModal = null;
                            _this.productDtoToModal = null;
                            if (item.option == 'View Guide') {
                                console.log(item);
                                _this.guideDtoToModal = item.entity;
                                _this.openModal(_this.contenidoDelModal, _this.guideDtoToModal, null);
                            }
                            else if (item.option == 'Receive Products') {
                                console.log(item);
                                _this.router.navigate(['/guides/list-guide/' + item.entity.guideId + '/products']);
                            }
                        });
                    }
                }
            }
        };
    };
    DashboardComponent.prototype.initOnChagedDataGuides = function () {
        var _this = this;
        this.optionsGuide.source.onChanged().subscribe(function (change) {
            if (change.action === 'page') {
                _this.pageChangeGuides(change.paging.page);
            }
        });
    };
    DashboardComponent.prototype.pageChangeGuides = function (pageIndex) {
        var _this = this;
        var getNew = pageIndex * this.optionsGuide.showPerPage;
        if (getNew >= this.optionsGuide.source.count() && getNew < this.optionsGuide.totalCount) {
            this.optionsGuide.currentPage = this.optionsGuide.currentPage + 1;
            var params = new http_1.HttpParams();
            if (this.optionsGuide.active != null) {
                params = params.append('Active', this.optionsGuide.active);
            }
            if (this.optionsGuide.status != null) {
                params = params.append('status', this.optionsGuide.status);
            }
            if (this.optionsGuide.destinationAgencyRef != null) {
                params = params.append('destinationAgencyRef', this.optionsGuide.destinationAgencyRef);
            }
            if (this.optionsGuide.orderBy != null) {
                params = params.append('OrderBy', this.optionsGuide.orderBy);
            }
            if (this.optionsGuide.fields != null) {
                params = params.append('Fields', this.optionsGuide.fields);
            }
            params = params.append('PageNumber', this.optionsGuide.currentPage.toString());
            params = params.append('PageSize', this.optionsGuide.pageSize.toString());
            this.serviceGuides
                .getAllGuides(params, this.optionsGuide.auxMediaTypeAccept)
                .subscribe(function (result) {
                if (!result) {
                    return;
                }
                if (result.status == 200) {
                    if (_this.optionsGuide.auxMediaTypeAccept.toLowerCase().includes('hateoas')) {
                        result.body.value.forEach(function (element) {
                            _this.optionsGuide.source.add(element);
                        });
                    }
                    else {
                        result.body.forEach(function (element) {
                            _this.optionsGuide.source.add(element);
                        });
                    }
                }
            }, function (err) {
                console.warn(err);
            });
        }
    };
    DashboardComponent.prototype.searchDataGuides = function () {
        this.optionsGuide.currentPage = 1;
        this.optionsGuide.pageSize = this.optionsGuide.showPerPage * 3;
        this.initDataGuides();
    };
    DashboardComponent.prototype.shippingConstructor = function () {
        this.inicializarTablaShippings();
        this.optionsShipping.auxMediaTypeAccept = environment_1.environment.mediaTypes.shipping.getAll.accept.getAllShippingJson;
        this.optionsShipping.active = true;
        // this.optionsShipping.fromAgency = this.dataLogin.agId;
        this.optionsShipping.orderBy = "date";
        this.optionsShipping.status = "PENDING";
        // this.optionsPostBox.serie = this.clientDto.serie;
        this.initDataShippings();
    };
    DashboardComponent.prototype.initDataShippings = function () {
        var _this = this;
        var params = new http_1.HttpParams();
        if (this.optionsShipping.fromAgency != null) {
            params = params.append('FromAgency', this.optionsShipping.fromAgency);
        }
        if (this.optionsShipping.active != null) {
            params = params.append('Active', this.optionsShipping.active);
        }
        if (this.optionsShipping.status != null) {
            params = params.append('status', this.optionsShipping.status);
        }
        if (this.optionsShipping.orderBy != null) {
            params = params.append('OrderBy', this.optionsShipping.orderBy);
        }
        if (this.optionsShipping.fields != null) {
            params = params.append('Fields', this.optionsShipping.fields);
        }
        params = params.append('PageNumber', this.optionsShipping.currentPage.toString());
        params = params.append('PageSize', this.optionsShipping.pageSize.toString());
        this.serviceShipping
            .getAllShippings(params, this.optionsShipping.auxMediaTypeAccept)
            .subscribe(function (result) {
            if (!result) {
                return;
            }
            if (result.status == 200) {
                if (_this.optionsShipping.auxMediaTypeAccept.toLowerCase().includes('hateoas')) {
                    _this.optionsShipping.source.load(result.body.value);
                    _this.optionsShipping.totalCount = JSON.parse(result.headers.get('X-Pagination'));
                    _this.optionsShipping.totalCount = _this.optionsShipping.totalCount['totalCount'];
                }
                else {
                    _this.optionsShipping.source.load(result.body);
                    console.log(JSON.parse(result.headers.get('X-Pagination')));
                    _this.optionsShipping.totalCount = JSON.parse(result.headers.get('X-Pagination'));
                    _this.optionsShipping.totalCount = _this.optionsShipping.totalCount['totalCount'];
                }
            }
        }, function (err) {
            console.warn(err);
        });
    };
    DashboardComponent.prototype.initOnChagedDataShipping = function () {
        var _this = this;
        this.optionsShipping.source.onChanged().subscribe(function (change) {
            if (change.action === 'page') {
                _this.pageChangeShipping(change.paging.page);
            }
        });
    };
    DashboardComponent.prototype.pageChangeShipping = function (pageIndex) {
        var _this = this;
        var getNew = pageIndex * this.optionsShipping.showPerPage;
        if (getNew >= this.optionsShipping.source.count() && getNew < this.optionsShipping.totalCount) {
            this.optionsShipping.currentPage = this.optionsShipping.currentPage + 1;
            var params = new http_1.HttpParams();
            if (this.optionsShipping.fromAgency != null) {
                params = params.append('FromAgency', this.optionsShipping.fromAgency);
            }
            if (this.optionsShipping.active != null) {
                params = params.append('Active', this.optionsShipping.active);
            }
            if (this.optionsShipping.status != null) {
                params = params.append('status', this.optionsShipping.status);
            }
            if (this.optionsShipping.orderBy != null) {
                params = params.append('OrderBy', this.optionsShipping.orderBy);
            }
            if (this.optionsShipping.fields != null) {
                params = params.append('Fields', this.optionsShipping.fields);
            }
            params = params.append('PageNumber', this.optionsShipping.currentPage.toString());
            params = params.append('PageSize', this.optionsShipping.pageSize.toString());
            this.serviceShipping
                .getAllShippings(params, this.optionsShipping.auxMediaTypeAccept)
                .subscribe(function (result) {
                if (!result) {
                    return;
                }
                if (result.status == 200) {
                    if (_this.optionsShipping.auxMediaTypeAccept.toLowerCase().includes('hateoas')) {
                        result.body.value.forEach(function (element) {
                            _this.optionsShipping.source.add(element);
                        });
                    }
                    else {
                        result.body.forEach(function (element) {
                            _this.optionsShipping.source.add(element);
                        });
                    }
                }
            }, function (err) {
                console.warn(err);
            });
        }
    };
    DashboardComponent.prototype.inicializarTablaShippings = function () {
        var _this = this;
        this.optionsShipping.settings = {
            mode: 'external',
            pager: {
                display: true,
                perPage: this.optionsShipping.showPerPage
            },
            actions: {
                add: false,
                edit: false,
                "delete": false,
                position: 'right'
            },
            columns: {
                date: {
                    title: 'Date',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        if (!row.active) {
                            sentData.action.push(new common_1.DatePipe('en-US').transform(value, 'd/MMM/yyyy'));
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
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
                client: {
                    title: 'Client',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = {
                            renderValue: value,
                            step: "btn btn-outline p-1 text-capitalize text-info"
                        };
                        return JSON.stringify(sentData);
                    },
                    renderComponent: button_view_component_1.ButtonViewComponent,
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (row) {
                            _this.router.navigate(['/clients/bills/' + row.clientRef]);
                        });
                    }
                },
                company: {
                    title: 'Order',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        if (!row.active) {
                            sentData.action.push("DELETED");
                            sentData.stepClass.push('btn btn-success');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push("" + value);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push("# Guide: " + row.numGuide);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        else {
                            if (row.fromAgency == environment_1.environment.tuplas.agencies.ECLJ) {
                                sentData.action.push("AG. ECLJ");
                                sentData.stepClass.push('btn btn-outline');
                                sentData.styl.push('background-color: darkgreen;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else if (row.fromAgency == environment_1.environment.tuplas.agencies.ECMH) {
                                sentData.action.push("AG. ECMH");
                                sentData.stepClass.push('btn btn-outline');
                                sentData.styl.push('background-color: rgb(9, 84, 164);line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else if (row.fromAgency == environment_1.environment.tuplas.agencies.USA) {
                                sentData.action.push("AG. USA");
                                sentData.stepClass.push('btn btn-outline');
                                sentData.styl.push('background-color: rgb(176, 153, 23)line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else {
                                sentData.action.push("AG. Unknown Agency");
                                sentData.stepClass.push('btn btn-outline');
                                sentData.styl.push('background-color: red; line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            sentData.action.push("" + value);
                            sentData.stepClass.push('btn btn-outline ');
                            sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
                            sentData.action.push("# Guide: " + row.numGuide);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
                        }
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                    }
                },
                information: {
                    title: 'Info',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        if (!row.active) {
                            sentData.action.push("DELETED");
                            sentData.stepClass.push('btn btn-success');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push("Request: " + row.productsTotal);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            sentData.action.push("Send: " + row.productsSend);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                        }
                        else {
                            if (row.status == 'COMPLETE') {
                                sentData.action.push("" + row.status);
                                sentData.stepClass.push('btn btn-success');
                                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else if (row.status == 'PENDING') {
                                sentData.action.push("" + row.status);
                                sentData.stepClass.push('btn btn-info');
                                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else if (row.status == 'INCOMPLETE') {
                                sentData.action.push("" + row.status);
                                sentData.stepClass.push('btn btn-warning');
                                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else if (row.status == 'EMPTY') {
                                sentData.action.push("EMPTY");
                                sentData.stepClass.push('btn btn-warning');
                                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            else {
                                sentData.action.push("UNKNOWN");
                                sentData.stepClass.push('btn btn-dark');
                                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                            }
                            sentData.action.push("Request: " + row.productsTotal);
                            sentData.stepClass.push('btn btn-outline ');
                            sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
                            sentData.action.push("Send: " + row.productsSend);
                            sentData.stepClass.push('btn btn-outline');
                            sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
                        }
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                    }
                },
                button: {
                    title: 'Buttons',
                    filter: false,
                    type: 'custom',
                    valuePrepareFunction: function (value, row, cell) {
                        var sentData = new multi_sel_component_1.ResourceMultiSel();
                        sentData.action = [];
                        sentData.styl = [];
                        sentData.stepClass = [];
                        sentData.action.push('View Shipping');
                        sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.50em 0.4em;display:inline-block;font-size: 100%;color:white;cursor: pointer;');
                        sentData.stepClass.push('btn btn-info');
                        sentData.entity = row;
                        sentData.action.push('Mark as shipped');
                        sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.50em 0.4em;display:inline-block;font-size: 100%;color:white;cursor: pointer;');
                        sentData.stepClass.push('btn btn-primary');
                        return sentData;
                    },
                    renderComponent: multi_sel_component_1.MultiSelComponent,
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (item) {
                            _this.shippingDtoToModal = null;
                            _this.guideDtoToModal = null;
                            _this.productDtoToModal = null;
                            if (item.option == 'View Shipping') {
                                _this.shippingDtoToModal = item.entity;
                                _this.openModal(_this.contenidoDelModal, _this.shippingDtoToModal, null);
                            }
                            else if (item.option == 'Mark as shipped') {
                                console.log(item);
                                _this.router.navigate(['/shipping/list-shippings/' + item.entity.shippingId + '/products']);
                            }
                        });
                    }
                }
            }
        };
    };
    DashboardComponent.prototype.searchDataShippings = function () {
        this.optionsShipping.currentPage = 1;
        this.optionsShipping.pageSize = this.optionsShipping.showPerPage * 3;
        this.initDataShippings();
    };
    DashboardComponent.prototype.constructorAgencies = function () {
        this.optionsAgency.auxMediaTypeAccept = environment_1.environment.mediaTypes.agency.get.accept.getAllJson;
        this.optionsAgency.active = true;
        this.optionsAgency.fields = 'agencyId,name,active';
        this.initDataAgencyes();
    };
    DashboardComponent.prototype.initDataAgencyes = function () {
        var _this = this;
        var params = new http_1.HttpParams();
        if (this.optionsAgency.active != null) {
            params = params.append('Active', this.optionsAgency.active);
        }
        if (this.optionsAgency.orderBy != null) {
            params = params.append('OrderBy', this.optionsAgency.orderBy);
        }
        if (this.optionsAgency.fields != null) {
            params = params.append('Fields', this.optionsAgency.fields);
        }
        params = params.append('PageNumber', this.optionsAgency.currentPage.toString());
        params = params.append('PageSize', 100);
        this.serviceAgency
            .getAllAgencys(params, this.optionsAgency.auxMediaTypeAccept)
            .subscribe(function (result) {
            if (!result) {
                return;
            }
            if (result.status == 200) {
                if (_this.optionsAgency.auxMediaTypeAccept.toLowerCase().includes('hateoas')) {
                    _this.optionsAgency.source.load(result.body.value);
                    _this.arrayAgencies = result.body.value;
                    _this.optionsAgency.totalCount = JSON.parse(result.headers.get('X-Pagination'));
                    _this.optionsAgency.totalCount = _this.optionsAgency.totalCount['totalCount'];
                }
                else {
                    _this.optionsAgency.source.load(result.body);
                    _this.arrayAgencies = result.body;
                    _this.optionsAgency.totalCount = JSON.parse(result.headers.get('X-Pagination'));
                    _this.optionsAgency.totalCount = _this.optionsAgency.totalCount['totalCount'];
                }
            }
        }, function (err) {
            console.warn(err);
        });
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
    };
    DashboardComponent.prototype.chartHovered = function (e) {
    };
    DashboardComponent.prototype.add = function () {
    };
    __decorate([
        core_1.ViewChild('content', { static: false })
    ], DashboardComponent.prototype, "contenidoDelModal");
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
