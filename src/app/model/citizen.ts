export interface Citizen {
    id: number,
    nome: string,
    cognome: string,
    ssn: string,
    data_nascita: string,
    email: string,
    provincia: string,
    comune: string,
    via: string;
    civico: number,
    cap: number,
    telefono: number,
    password: string,
    ref_ruolo: {
        id: number;
        costo: number;
        giacenza: number;
        nome: string;
    } | [];
    ref_categoria: {
        id: number;
        costo: number;
        giacenza: number;
        nome: string;
    } | [];

}