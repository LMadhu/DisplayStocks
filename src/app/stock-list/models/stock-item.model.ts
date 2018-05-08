export class Serializable {
  constructor(json?: any) {
      if (json) {
          Object.assign(this, json);
      }
  }
}

export class StockItemModel extends Serializable {
  accountId: number;
  accountType: string;
  accountNumber: string;
  availableCash: number;
  changeInPercent: number;
  changeInPrice: number;
}
