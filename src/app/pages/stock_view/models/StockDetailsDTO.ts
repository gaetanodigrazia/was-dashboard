export interface IStockDetailsDTO {
  id: string;
  name: string;
  description: string;
  supplierId: string;
  price: number;
  quantity: number;
  isArchived: boolean;
}

export class StockDetailsDTO implements IStockDetailsDTO {
  public id: string;
  public name: string;
  public description: string;
  public supplierId: string;
  public price: number;
  public quantity: number;
  public isArchived: boolean;

  constructor(
    id: string,
    name: string,
    description: string,
    supplierId: string,
    price: number,
    quantity: number,
    isArchived: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.supplierId = supplierId;
    this.price = price;
    this.quantity = quantity;
    this.isArchived = isArchived;
  }
}
