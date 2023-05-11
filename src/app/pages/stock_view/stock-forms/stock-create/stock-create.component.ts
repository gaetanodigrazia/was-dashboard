import { Component, OnInit } from '@angular/core';
import { StockService } from '../../../../shared/stock.service';
import { NbDialogService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { StockInputDTO } from '../../models/StockInputDTO';
@Component({
  selector: 'ngx-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss']
})
export class StockCreateComponent implements OnInit {
  to_query_status: number;
  action: string;
  stock: StockInputDTO;
  constructor(private stockService: StockService, 
    private dialogService: NbDialogService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(params => {
      if (params['action'] === "create") {
        this.action = "Inserisci";
        this.to_query_status = 0;
      } else {
        this.to_query_status = 1;
        this.action = "Modifica";
      };
      console.log(params)
    });
    router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {}
  perform(name, surname, businessName, vatNumber,
    country, city, municipality, street, streetNumber, cap, email, phoneNumber){
      let stockInputDTO: StockInputDTO | Record<string, never> = {};
      stockInputDTO  = new StockInputDTO(name, surname, businessName, vatNumber,
        country);
      this.stockService.createStock(stockInputDTO).subscribe(returnedObj => {
        this.router.navigate(["../../../stock/list/active"], {
          relativeTo: this.route,
        });  
      });
    }

  }

