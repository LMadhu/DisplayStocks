import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { StockListModule } from './stock-list/stock-list.module';
import { StockListService } from './stock-list/services/stock-list.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    StockListModule
  ],
  providers: [StockListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
