export interface IProductDetailsDTO {
  id: string;
  name: string;
  description: string;
  b2bPrice: number;
  b2cPrice: number;
  isArchived: boolean;
}

export class ProductDetailsDTO implements IProductDetailsDTO {
  id: string;
  name: string;
  description: string;
  b2bPrice: number;
  b2cPrice: number;
  isArchived: boolean;

  constructor(id: string, name: string, description: string, b2bPrice: number, b2cPrice: number, isArchived: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.b2bPrice = b2bPrice;
    this.b2cPrice = b2cPrice;
    this.isArchived = isArchived;
  }
}
