import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { CustomerService } from '../../../../shared/customer.service';
import { Customer } from '../../../../model/customer';

@Component({
  selector: 'ngx-show-details-modal',
  templateUrl: './show-details-modal.component.html',
  styleUrls: ['./show-details-modal.component.scss']
})
export class ShowDetailsModalComponent implements OnInit {
  customer: Customer | any;
  disabled: boolean = true;
  constructor(protected ref: NbDialogRef<ShowDetailsModalComponent>, private customerService: CustomerService) { 
  }
  @Input() toDialog: Customer;
  ngOnInit(): void {
    this.customerService.getCustomerById(this.toDialog.id).subscribe(result => {
      this.customer = result;
      console.log(this.customer);
    });
  }
  cancel() {
    this.ref.close(false);
  }
}
