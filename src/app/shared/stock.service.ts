import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockInputDTO } from '../pages/stock_view/models/StockInputDTO';
import { StockDetailsDTO } from '../pages/stock_view/models/StockDetailsDTO';
import { StockTableDTO } from '../pages/stock_view/models/StockTableDTO';

@Injectable()
export class StockService {

  private baseUrl = 'http://localhost:8082/stock-service';

  constructor(private http: HttpClient) { }

  createStock(stockInput: StockInputDTO): Observable<StockDetailsDTO> {
    return this.http.post<StockDetailsDTO>(`${this.baseUrl}`, stockInput);
  }

  getAllStocks(): Observable<StockTableDTO[]> {
    return this.http.get<StockTableDTO[]>(`${this.baseUrl}`);
  }

  getStockById(stockId: string): Observable<StockDetailsDTO> {
    return this.http.get<StockDetailsDTO>(`${this.baseUrl}/byId/${stockId}`);
  }

  deleteStock(stockId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${stockId}`);
  }

  updateStock(stock: StockDetailsDTO, stockId:string): Observable<StockDetailsDTO> {
    return this.http.put<StockDetailsDTO>(`${this.baseUrl}/${stockId}`,stock);
  }

}
