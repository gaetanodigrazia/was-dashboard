import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { CustomerService } from '../../../../shared/customer.service';
import { Customer } from '../../../../model/customer';
import { CustomerDetailsDTO } from '../../models/CustomerDetailsDTO';
import { CustomerTableDTO } from '../../models/CustomerTableDTO';
import { CustomerInputDTO } from '../../models/CustomerInputDTO';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';

@Component({
  selector: 'ngx-show-details-modal',
  templateUrl: './show-details-modal.component.html',
  styleUrls: ['./show-details-modal.component.scss']
})
export class ShowDetailsModalComponent implements OnInit {
  customer: CustomerDetailsDTO | any;
  disabled: boolean = true;
  constructor(protected ref: NbDialogRef<ShowDetailsModalComponent>, 
    private customerService: CustomerService,private dialogService: NbDialogService, 
    private toastrService: NbToastrService) { 
  }
  @Input() toDialog: CustomerTableDTO;
  ngOnInit(): void {
    this.customerService.getCustomerById(this.toDialog.id).subscribe(result => {
      this.customer = result;
      console.log(this.customer);
    });
  }
  cancel() {
    this.ref.close(false);
  }
  performed() {
    this.ref.close(true);
  }
  update(name, surname, businessName, vatNumber,
    country, city, municipality, street, streetNumber, cap, email, phoneNumber){
        this.dialogService
        .open(DialogComponent, {
          context: {
            title:"TITOLO",
            message: "TESTO",
          },
        })
        .onClose.subscribe((res) => {
          if (res) {
            let customerInputDTO: CustomerDetailsDTO | Record<string, never> = {};
            customerInputDTO  = new CustomerDetailsDTO(this.customer.id, name, surname, businessName, vatNumber,
              country, city, municipality, street, streetNumber, cap, email, phoneNumber);
            this.customerService.updateCustomer(customerInputDTO, this.customer.id,).subscribe(
              () => {
                this.showSuccess();
                this.performed();
              },
              (error) => this.showError(error)
            );
          } else close();
        });
  }
  showSuccess() {
    this.toastrService.success("Modificato");
  }

  showError(error) {
    if (error.status == "500" && error.ok == false) {
      this.toastrService.danger("DANGER"
      );
    } else {
      this.toastrService.danger(
        error.message,
        "ERROR MESSAGE"
      );
    }
  }
}



