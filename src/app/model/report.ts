export interface Report {
    id: number;
    cittadino: {
        id: number,
        cap: number,
        civico: number,
        cognome: string,
        comune: string,
        data_nascita: string,
        email: string,
        nome: string,
        password: string,
        provincia: string,
        ssn: string,
        telefono: number,
        via: string;
        categoria: number;
        ruolo: number;
    } | [] | number;
    medico: {
        id: number,
        cap: number,
        civico: number,
        cognome: string,
        comune: string,
        data_nascita: string,
        email: string,
        nome: string,
        password: string,
        provincia: string,
        ssn: string,
        telefono: number,
        via: string;
        categoria: number;
        ruolo: number;
    } | [] | number;
    prestazione: {
        id: number;
        costo: number;
        giacenza: number;
        nome: string;
    } | [] | number;
    prenotazione: {
        id: number
        dataRichiesta: string;
        status: number;
        codicePrenotazione: string;
        dataPrenotazione: string,
        oraPrenotazione: string;
        dataEsecuzione: string;
        cittadino: {
            id: number,
            cap: number,
            civico: number,
            cognome: string,
            comune: string,
            data_nascita: string,
            email: string,
            nome: string,
            password: string,
            provincia: string,
            ssn: string,
            telefono: number,
            via: string;
            categoria: number;
            ruolo: number;
        } | [] | number;
        prestazione: {
            id: number;
            costo: number;
            giacenza: number;
            nome: string;
        } | [] | number;
    }
}
