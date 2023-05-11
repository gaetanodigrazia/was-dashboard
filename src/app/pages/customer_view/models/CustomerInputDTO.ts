export interface CustomerInputDTO {
    name?: string;
    surname?: string;
    businessName?: string;
    vatNumber?: string;
    country?: string;
    city?: string;
    municipality?: string;
    street?: string;
    streetNumber?: string;
    postalCode?: string;
    email?: string;
    phoneNumber?: string;
}

export class CustomerInputDTO{
    constructor(
        name?: string,
        surname?: string,
        businessName?: string,
        vatNumber?: string,
        country?: string,
        city?: string,
        municipality?: string,
        street?: string,
        streetNumber?: string,
        postalCode?: string,
        email?: string,
        phoneNumber?: string
    ) {
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
        this.phoneNumber = phoneNumber;     } 
}