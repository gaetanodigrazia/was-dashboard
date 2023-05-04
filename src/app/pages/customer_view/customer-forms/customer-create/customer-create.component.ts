import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../shared/customer.service';
import { NbDialogService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../../../model/customer';

@Component({
  selector: 'ngx-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  to_query_status: number;
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  action: string;
  customer: Customer;
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
    /*This do the trick!*/
    router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {
  }
  perform(name, surname, businessName, vatNumber,
    country, city, municipality, street, cap, email, phoneNumber){
    if(this.action === 'create'){
      this.customer  = new Customer("1", name, surname, vatNumber, country, city, email, phoneNumber );
      this.customerService.create(this.customer)
    }  else{

    }
  }

}
