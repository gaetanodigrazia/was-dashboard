import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { StockService } from '../../../../shared/stock.service';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { StockInputDTO } from '../../models/StockInputDTO';
import { StockDetailsDTO } from '../../models/StockDetailsDTO';
import { StockTableDTO } from '../../models/StockTableDTO';

@Component({
  selector: 'ngx-show-details-modal',
  templateUrl: './show-details-modal.component.html',
  styleUrls: ['./show-details-modal.component.scss']
})
export class ShowDetailsModalComponent implements OnInit {
  product: StockDetailsDTO | any;
  disabled: boolean = true;
  constructor(protected ref: NbDialogRef<ShowDetailsModalComponent>, 
    private productService: StockService,private dialogService: NbDialogService, 
    private toastrService: NbToastrService) { 
  }
  @Input() toDialog: StockTableDTO;
  ngOnInit(): void {
    this.productService.getStockById(this.toDialog.id).subscribe(result => {
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
            let customerInputDTO: StockDetailsDTO | Record<string, never> = {};
            customerInputDTO  = new StockDetailsDTO(this.product.id, name, surname, businessName, vatNumber,
              country, false);
            this.productService.updateStock(customerInputDTO, this.product.id,).subscribe(
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



