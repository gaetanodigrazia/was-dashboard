export interface IProductTableDTO{
  id: string;
  name: string;
  description: string;
  b2bPrice: number;
  b2cPrice: number;
  isArchived: boolean;
}

export class ProductTableDTO implements IProductTableDTO {
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
