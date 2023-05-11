export interface CustomerDetailsDTO {
    id: string;
    name: string;
    surname: string;
    businessName: string;
    vatNumber: string;
    country: string;
    city: string;
    municipality: string;
    street: string;
    streetNumber: string;
    postalCode: string;
    email: string;
    phoneNumber: string;
  }
  
export class CustomerDetailsDTO {
    constructor(
      public id: string,
      public name: string,
      public surname: string,
      public businessName: string,
      public vatNumber: string,
      public country: string,
      public city: string,
      public municipality: string,
      public street: string,
      public streetNumber: string,
      public postalCode: string,
      public email: string,
      public phoneNumber: string
    ) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.businessName = businessName;
      this.vatNumber = vatNumber;
      this.country = country;
      this.city = city;
      this.municipality = municipality;
      this.street = street;
      this.streetNumber = streetNumber;
      this.postalCode = postalCode;
      this.email = email;
      this.phoneNumber = phoneNumber;
    }
  }
  