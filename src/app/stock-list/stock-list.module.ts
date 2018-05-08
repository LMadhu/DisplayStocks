import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { StockListComponent } from './stock-list.component';
import { StockListService } from './services/stock-list.service';

@NgModule({
  imports: [CommonModule],
  exports: [StockListComponent],
  declarations: [StockListComponent],
  providers: [StockListService],
})
export class StockListModule { }
