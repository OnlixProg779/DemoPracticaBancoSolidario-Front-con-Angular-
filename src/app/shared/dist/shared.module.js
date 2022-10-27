"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var feather_icons_component_1 = require("./components/feather-icons/feather-icons.component");
var footer_component_1 = require("./components/footer/footer.component");
var header_component_1 = require("./components/header/header.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var fullscreen_directive_1 = require("./directives/fullscreen.directive");
var content_layout_component_1 = require("./layout/content-layout/content-layout.component");
var nav_service_1 = require("./service/nav.service");
var windows_service_1 = require("./service/windows.service");
var breadcrumb_component_1 = require("./components/breadcrumb/breadcrumb.component");
var right_sidebar_component_1 = require("./components/right-sidebar/right-sidebar.component");
var button_view_component_1 = require("./button-view/button-view.component");
var input_img_component_1 = require("./utils/input-img/input-img.component");
var check_box_view_component_1 = require("./utils/check-box-view/check-box-view.component");
var ng_lazyload_image_1 = require("ng-lazyload-image");
var ng2_smart_table_1 = require("ng2-smart-table");
var forms_1 = require("@angular/forms");
var ng_select2_1 = require("ng-select2");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var auto_focus_invalid_input_directive_1 = require("./directives/auto-focus-invalid-input.directive");
var buttons_modal_routes_component_1 = require("./buttons-modal-routes/buttons-modal-routes.component");
var form_search_filter_component_1 = require("./utils/form-search-filter/form-search-filter.component");
var multi_sel_component_1 = require("./multi-sel/multi-sel.component");
var card_bank_account_component_1 = require("./card-bank-account/card-bank-account.component");
var ngx_scanner_1 = require("@zxing/ngx-scanner");
var custom_editor_component_1 = require("./utils/custom-editor/custom-editor.component");
var ngx_infinite_scroll_1 = require("ngx-infinite-scroll");
var list_smart_generic_component_1 = require("./utils/list-smart-generic/list-smart-generic.component");
var generic_filters_component_1 = require("./utils/generic-filters/generic-filters.component");
var client_standard_filters_component_1 = require("./components-filters/clientSchema/client/client-standard-filters/client-standard-filters.component");
var form_create_cuenta_ahorro_component_1 = require("./utils/form-create-cuenta-ahorro/form-create-cuenta-ahorro.component");
var plan_ahorro_standars_filters_component_1 = require("./components-filters/bankSchema/PlanAhorro/plan-ahorro-standars-filters/plan-ahorro-standars-filters.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                fullscreen_directive_1.ToggleFullscreenDirective,
                feather_icons_component_1.FeatherIconsComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                content_layout_component_1.ContentLayoutComponent,
                breadcrumb_component_1.BreadcrumbComponent,
                right_sidebar_component_1.RightSidebarComponent,
                button_view_component_1.ButtonViewComponent,
                input_img_component_1.InputImgComponent,
                check_box_view_component_1.CheckBoxViewComponent,
                auto_focus_invalid_input_directive_1.AutoFocusInvalidInputDirective,
                buttons_modal_routes_component_1.ButtonsModalRoutesComponent,
                form_search_filter_component_1.FormSearchFilterComponent,
                multi_sel_component_1.MultiSelComponent,
                card_bank_account_component_1.CardBankAccountComponent,
                custom_editor_component_1.CustomEditorComponent,
                list_smart_generic_component_1.ListSmartGenericComponent,
                generic_filters_component_1.GenericFiltersComponent,
                client_standard_filters_component_1.ClientStandardFiltersComponent,
                form_create_cuenta_ahorro_component_1.FormCreateCuentaAhorroComponent,
                plan_ahorro_standars_filters_component_1.PlanAhorroStandarsFiltersComponent,
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ng_lazyload_image_1.LazyLoadImageModule,
                forms_1.FormsModule,
                ng2_smart_table_1.Ng2SmartTableModule,
                forms_1.ReactiveFormsModule,
                ng_select2_1.NgSelect2Module,
                ngx_datatable_1.NgxDatatableModule,
                ng_bootstrap_1.NgbModule,
                ngx_scanner_1.ZXingScannerModule,
                ngx_infinite_scroll_1.InfiniteScrollModule
            ],
            providers: [nav_service_1.NavService, windows_service_1.WINDOW_PROVIDERS],
            exports: [
                feather_icons_component_1.FeatherIconsComponent,
                fullscreen_directive_1.ToggleFullscreenDirective,
                input_img_component_1.InputImgComponent,
                ng_lazyload_image_1.LazyLoadImageModule,
                auto_focus_invalid_input_directive_1.AutoFocusInvalidInputDirective,
                buttons_modal_routes_component_1.ButtonsModalRoutesComponent,
                form_search_filter_component_1.FormSearchFilterComponent,
                multi_sel_component_1.MultiSelComponent,
                card_bank_account_component_1.CardBankAccountComponent,
                custom_editor_component_1.CustomEditorComponent,
                list_smart_generic_component_1.ListSmartGenericComponent,
                generic_filters_component_1.GenericFiltersComponent,
                client_standard_filters_component_1.ClientStandardFiltersComponent,
                form_create_cuenta_ahorro_component_1.FormCreateCuentaAhorroComponent,
                plan_ahorro_standars_filters_component_1.PlanAhorroStandarsFiltersComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
