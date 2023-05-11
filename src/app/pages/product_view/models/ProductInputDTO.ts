export interface IProductInputDTO {
    name: string;
    description: string;
    b2bPrice: number;
    b2cPrice: number;
    isArchived: boolean;
  }
  
export class ProductInputDTO implements IProductInputDTO {
    name: string;
    description: string;
    b2bPrice: number;
    b2cPrice: number;
    isArchived: boolean;
  
    constructor(name: string, description: string, b2bPrice: number, b2cPrice: number, isArchived: boolean) {
      this.name = name;
      this.description = description;
      this.b2bPrice = b2bPrice;
      this.b2cPrice = b2cPrice;
      this.isArchived = isArchived;
    }
  }
  