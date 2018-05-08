import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { StockItemModel } from './models/stock-item.model';
import { StockListService } from "./services/stock-list.service";

@Component({
  selector: 'stock-list',
  templateUrl: 'stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})

export class StockListComponent implements OnInit {

  stockListData: StockItemModel[];
  defaultNoOfRecords: number = 3;
  defaultSortColumn: string = "availableCash";
  defaultSortDirection: string = "asc";
  currentSortColumn: string = this.defaultSortColumn;
  currentSortDirection: string = this.defaultSortDirection;
  loadMoreRecords: boolean = false;

  constructor(private stockListService: StockListService) {

  }

  ngOnInit() {
    if (!this.stockListData) {
      this.readStockList(this.defaultSortColumn, this.defaultSortDirection);
    }
  }

  readStockList(sortColumn, sortDirection) {
    let recordCount: number = 0;
    if (this.loadMoreRecords) {
      recordCount = -1;
    }
    else {
      recordCount = this.defaultNoOfRecords;
    }

    this.stockListService.getStockData(recordCount, sortColumn, sortDirection).subscribe(
      (data) => {
        this.stockListData = data;
      })
  }

  handleHeaderClick(sortColumn: string) {
    this.currentSortDirection = this.currentSortDirection === 'asc' ? 'desc' : 'asc'
    this.currentSortColumn = sortColumn;
    this.readStockList(this.currentSortColumn, this.currentSortDirection);
  }

  loadMore() {
    this.loadMoreRecords = this.loadMoreRecords === false ? true : false;
    this.readStockList(this.currentSortColumn, this.currentSortDirection);
  }
}
