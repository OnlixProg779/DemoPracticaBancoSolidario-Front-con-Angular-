import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './components/dashboard/dashboard.module';
// import { SharedModule } from './shared/shared.module';

import { AuthModule } from './components/auth/auth.module';
import {NgxImageCompressService} from 'ngx-image-compress';
import { BankSchemaModule } from './components/BankSchema/bank-schema.module';
import { ClientSchemaModule } from './components/ClientSchema/client-schema.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AuthModule,
    BankSchemaModule,
    ClientSchemaModule,
    DashboardModule,
    // SharedModule,
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
