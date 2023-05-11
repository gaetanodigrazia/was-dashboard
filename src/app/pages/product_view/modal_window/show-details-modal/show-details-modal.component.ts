import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { ProductService } from '../../../../shared/product.service';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { ProductInputDTO } from '../../models/ProductInputDTO';
import { ProductDetailsDTO } from '../../models/ProductDetailsDTO';
import { ProductTableDTO } from '../../models/ProductTableDTO';

@Component({
  selector: 'ngx-show-details-modal',
  templateUrl: './show-details-modal.component.html',
  styleUrls: ['./show-details-modal.component.scss']
})
export class ShowDetailsModalComponent implements OnInit {
  product: ProductDetailsDTO | any;
  disabled: boolean = true;
  constructor(protected ref: NbDialogRef<ShowDetailsModalComponent>, 
    private productService: ProductService,private dialogService: NbDialogService, 
    private toastrService: NbToastrService) { 
  }
  @Input() toDialog: ProductTableDTO;
  ngOnInit(): void {
    this.productService.getProductById(this.toDialog.id).subscribe(result => {
      this.product = result;
      console.log(this.product);
    });
  }
  cancel() {
    this.ref.close(false);
  }
  performed() {
    this.ref.close(true);
  }
  update(name, surname, businessName, vatNumber,
    country){
        this.dialogService
        .open(DialogComponent, {
          context: {
            title:"TITOLO",
            message: "TESTO",
          },
        })
        .onClose.subscribe((res) => {
          if (res) {
            let customerInputDTO: ProductDetailsDTO | Record<string, never> = {};
            customerInputDTO  = new ProductDetailsDTO(this.product.id, name, surname, businessName, vatNumber,
              country);
            this.productService.updateProduct(customerInputDTO, this.product.id,).subscribe(
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



