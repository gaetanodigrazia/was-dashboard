import { Component, Input, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../../model/customer';
import { CustomerService } from '../../../shared/customer.service';
import { TableActionsComponent } from '../../../shared/table-actions/table-actions.component';
import { DialogComponent } from "../../../shared/dialog/dialog.component";
import { ShowDetailsModalComponent } from '../modal_window/show-details-modal/show-details-modal.component';


@Component({
  selector: 'ngx-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  products: Customer[];
  to_query_status: number;
  private sub: any;
  @Input() value;

  settings = {
    columns: {
      name: {
        title: 'Nome',
        type: 'string',
      },
      surname: {
        title: 'Cognome',
        type: 'string',
      },
      businessName: {
        title: 'Ragione Sociale',
        type: 'string',
      },
      vatNumber: {
        title: 'Partita Iva',
        type: 'string',
      },
      country: {
        title: 'Nazione',
        type: 'string',
      },
      city: {
        title: 'Città',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      phoneNumber: {
        title: 'Telefono',
        type: 'string',
      },
      actions: {
        title: "Azioni",
        filter: false,
        sort: false,
        type: "custom",
        valuePrepareFunction: (cell, row) => {
          let deleteEnalbed = true;
          console.log(row.createdBy);
          return [
            {
              action: "edit",
              enabled: true,
              status: "info",
              icon: "edit-2",
              tooltip: "Modifica"
            },
            {
              action: "delete",
              enabled: deleteEnalbed,
              status: "danger",
              icon: "trash-2",
              tooltip: "Elimina"
            },
            {
              action: "share",
              enabled: deleteEnalbed,
              status: "success",
              icon: "share",
              tooltip: "Condividi"
            },
            {
              action: "details",
              enabled: true,
              status: "primary",
              icon: "file-text-outline",
              tooltip: "Dettagli"
            },
            {
              action: "archive",
              enabled: true,
              status: "warning",
              icon: "archive-outline",
              tooltip: "Archivia"
            },
            {
              action: "archive",
              enabled: true,
              status: "success",
              icon: "book-outline",
              tooltip: "Ordini"
            },
            {
              action: "newOrder",
              enabled: true,
              status: "success",
              icon: "plus-circle-outline",
              tooltip: "Nuovo ordine"
            },
            {
              action: "profile",
              enabled: true,
              status: "success",
              icon: "arrow-circle-right-outline",
              tooltip: "Profilo"
            },
            {
              action: "stats",
              enabled: true,
              status: "success",
              icon: "pie-chart-outline",
              tooltip: "Statistiche"
            },
          ];
        },
        renderComponent: TableActionsComponent,
        onComponentInitFunction: (instance) => {
          instance.onCustom.subscribe((value) => {
            this.onCustom(value, instance.rowData);
          });
        },
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      share: false,
    },
  };



  constructor(private customerService: CustomerService, 
    private dialogService: NbDialogService, 
    private route: ActivatedRoute, private router: Router, private toastrService: NbToastrService) {
    route.params.subscribe(params => {
      if (params['status'] === "active") {
        this.to_query_status = 0;
      } else {
        this.to_query_status = 1;
      };
      console.log(params)
    });
    /*This do the trick!*/
    router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
      this.fetchTableData();
  }

  showSuccess() {
    this.toastrService.success("Eliminato");
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



fetchTableData() {
  this.customerService.getAllCustomers().subscribe(products => {
    this.products = products;
    console.log(this.products);
    this.source.load(this.products);
  });
}
onCustom(event, data) {
  if (event == "delete") {
    this.dialogService
      .open(DialogComponent, {
        context: {
          title:"TITOLO",
          message: "TESTO",
        },
      })
      .onClose.subscribe((res) => {
        if (res) {
          this.customerService.deleteCustomer(data.id).subscribe(
            () => {
              this.fetchTableData();
              this.showSuccess();
            },
            (error) => this.showError(error)
          );
        } else return;
      });
  } else if (event == "details") {
    this.dialogService
    .open(ShowDetailsModalComponent, {
      context: {
        toDialog : data 
      },
    })
  }
  else if (event == "edit") {
    this.dialogService
    .open(ShowDetailsModalComponent, {
      context: {
        toDialog : data,
        disabled : false,
      },
    }).onClose.subscribe((res) => {
      if (res) {
            this.fetchTableData();
      } else return;
    });
  }
}
}
