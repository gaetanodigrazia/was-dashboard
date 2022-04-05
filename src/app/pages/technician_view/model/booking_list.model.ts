export interface BookingList {
    id: number
    dataRichiesta: string;
    status: number;
    codicePrenotazione: string;
    oraPrenotazione: string;
    dataEsecuzione: string;
    refCittadino: {
        id: number
    }
    refPrestazione: number;
}
