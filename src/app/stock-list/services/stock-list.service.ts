import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { StockItemModel } from '../models/stock-item.model';

@Injectable()
export class StockListService {
  private getStockListUrl = '../../assets/stock-data.json';
  constructor(private httpClient: HttpClient) { }

  getStockData(recordCount, sortColumn, sortDirection): Observable<StockItemModel[]> {
    let stockListData: StockItemModel[] = [];

    return this.httpClient.get(this.getStockListUrl).pipe(map((data: any) => {
      data = data.stockData;
      data = this.sortData(data, sortColumn, sortDirection);
      if (recordCount > 0) {
        for (let i = 0; i < recordCount; i++) {
          stockListData.push(data[i]);
        }
        return stockListData;
      }
      else {
        return data;
      }
    }));
  }

  // for simulating sort at server
  sortData(data: any[], columnName: string, sortDirection: string): any[] {
    if(sortDirection === "asc"){
      return data.sort(this.sortByProperty(columnName));
    }
    else{
      return data.sort(this.sortByProperty(columnName)).reverse();
    }
  }

  sortByProperty(property) {
    return function (x, y) {
      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
  };
}
