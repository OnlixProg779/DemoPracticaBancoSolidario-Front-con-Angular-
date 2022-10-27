import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ToggleFullscreenDirective } from "./directives/fullscreen.directive";
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavService } from './service/nav.service';
import { WINDOW_PROVIDERS } from './service/windows.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { ButtonViewComponent } from './button-view/button-view.component';
import { InputImgComponent } from './utils/input-img/input-img.component';
import { CheckBoxViewComponent } from './utils/check-box-view/check-box-view.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoFocusInvalidInputDirective } from './directives/auto-focus-invalid-input.directive';
import { ButtonsModalRoutesComponent } from './buttons-modal-routes/buttons-modal-routes.component';
import { FormSearchFilterComponent } from './utils/form-search-filter/form-search-filter.component';

import { MultiSelComponent } from './multi-sel/multi-sel.component';
import { CardBankAccountComponent } from './card-bank-account/card-bank-account.component';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CustomEditorComponent } from './utils/custom-editor/custom-editor.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListSmartGenericComponent } from './utils/list-smart-generic/list-smart-generic.component';
import { GenericFiltersComponent } from './utils/generic-filters/generic-filters.component';
import { ClientStandardFiltersComponent } from './components-filters/clientSchema/client/client-standard-filters/client-standard-filters.component';
import { FormCreateCuentaAhorroComponent } from './utils/form-create-cuenta-ahorro/form-create-cuenta-ahorro.component';
import { PlanAhorroStandarsFiltersComponent } from './components-filters/bankSchema/PlanAhorro/plan-ahorro-standars-filters/plan-ahorro-standars-filters.component';


@NgModule({
  declarations: [
    ToggleFullscreenDirective,
    FeatherIconsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ContentLayoutComponent,
    BreadcrumbComponent,
    RightSidebarComponent,
    ButtonViewComponent,
    InputImgComponent,
    CheckBoxViewComponent,
    AutoFocusInvalidInputDirective,
    ButtonsModalRoutesComponent,
    FormSearchFilterComponent,
    MultiSelComponent,
    CardBankAccountComponent,
    CustomEditorComponent,
    ListSmartGenericComponent,
    GenericFiltersComponent,
    ClientStandardFiltersComponent,
    FormCreateCuentaAhorroComponent,
    PlanAhorroStandarsFiltersComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule,
    FormsModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    NgSelect2Module,
    NgxDatatableModule,
    NgbModule,
    ZXingScannerModule,
    InfiniteScrollModule
    
  ],
  providers: [NavService, WINDOW_PROVIDERS],
  exports: [
    FeatherIconsComponent, 
    ToggleFullscreenDirective,
    InputImgComponent,
    LazyLoadImageModule,
    AutoFocusInvalidInputDirective,
    ButtonsModalRoutesComponent,
    FormSearchFilterComponent,
    MultiSelComponent,
    CardBankAccountComponent,
    CustomEditorComponent,
    ListSmartGenericComponent,
    GenericFiltersComponent,
    ClientStandardFiltersComponent,
    FormCreateCuentaAhorroComponent,
    PlanAhorroStandarsFiltersComponent
  ]
})
export class SharedModule { }
