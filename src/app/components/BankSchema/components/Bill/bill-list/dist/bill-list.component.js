"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BillListComponent = void 0;
var core_1 = require("@angular/core");
var functionsShared_1 = require("src/app/shared/functions/functionsShared");
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
        this.optionsBill = new options_bill_1.OptionsBill();
    }
    BillListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSettingsService.settingsPlanAhorro(this.optionsBill.showPerPage, "list-plan-ahorro").subscribe(function (result) {
            _this.optionsBill.settings = result;
        }, (function (err) {
            console.warn(err);
        }));
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
