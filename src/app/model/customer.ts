export interface Customer {
    id: string;
    name: string;
    surname: string;
    vatNumber: string;
    country: string;
    city: string;
    email: string;
    phoneNumber: string;
}

export class Customer{
    constructor(
        public id: string,
        public name: string,
        public surname: string,
        public vatNumber: string,
        public country: string,
        public city: string,
        public email: string,
        public phoneNumber: string,
    ) { } 
}