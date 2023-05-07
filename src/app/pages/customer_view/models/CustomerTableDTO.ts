export interface CustomerTableDTO {
    id: string;
    name: string;
    surname: string;
    businessName: string;
    vatNumber: string;
    country: string;
    city: string;
    email: string;
    phoneNumber: string;
  }
  
export  class CustomerTableDTO {
    constructor(
      public id: string,
      public name: string,
      public surname: string,
      public businessName: string,
      public vatNumber: string,
      public country: string,
      public city: string,
      public email: string,
      public phoneNumber: string
    ) {
      this.name = name;
      this.surname = surname;
      this.businessName = businessName;
      this.vatNumber = vatNumber;
      this.country = country;
      this.city = city;
      this.email = email;
      this.phoneNumber = phoneNumber;
    }
  }
  