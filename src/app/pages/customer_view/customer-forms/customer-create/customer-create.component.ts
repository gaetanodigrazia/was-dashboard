import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../shared/customer.service';
import { NbDialogService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../../../model/customer';
import { CustomerInputDTO } from '../../models/CustomerInputDTO';

@Component({
  selector: 'ngx-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  to_query_status: number;
  action: string;
  customer: CustomerInputDTO;
  constructor(private customerService: CustomerService, 
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
      let customerInputDTO: CustomerInputDTO | Record<string, never> = {};
      customerInputDTO  = new CustomerInputDTO(name, surname, businessName, vatNumber,
        country, city, municipality, street, streetNumber, cap, email, phoneNumber);
      this.customerService.createCustomer(customerInputDTO).subscribe(returnedObj => {
        this.router.navigate(["../../../customer/list/active"], {
          relativeTo: this.route,
        });  
      });
    }

  }

