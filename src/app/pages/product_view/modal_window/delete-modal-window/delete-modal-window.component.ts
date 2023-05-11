import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { CustomerService } from '../../../../shared/customer.service';
import { Customer } from '../../../../model/customer';

@Component({
  selector: 'ngx-delete-modal-window',
  templateUrl: './delete-modal-window.component.html',
  styleUrls: ['./delete-modal-window.component.scss']
})
export class DeleteModalWindowComponent implements OnInit {
  constructor(protected ref: NbDialogRef<DeleteModalWindowComponent>, private customerService: CustomerService) { 
  }
  @Input() toDialog: Customer;
  ngOnInit(): void {}

  delete(){
    this.customerService.deleteCustomer(this.toDialog.id).subscribe(result => {
      console.log(result);
    });
    this.close();
  }
  close() {
    this.ref.close(false);
  }
}
