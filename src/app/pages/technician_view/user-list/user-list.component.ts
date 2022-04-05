import { Component, Input, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { NbDialogService } from '@nebular/theme';
import { ShowCitizenButtonComponent } from '../button/show-citizen-button/show-citizen-button.component';
import { ShowMedicalServiceButtonComponent } from '../button/show-medical-service-button/show-medical-service-button.component';
import { Citizen } from '../../../model/citizen';
import { ShowReportStatusComponent } from '../button/show-report-status/show-report-status.component';
import { CitizenService } from '../../../shared/citizen.service';
import { PathologyService } from '../../../shared/pathology.service';
import { Pathology } from '../../../model/pathology';
import { NewBookingButtonComponent } from '../button/new-booking-button/new-booking-button.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUserButtonComponent } from '../button/edit-user-button/edit-user-button.component';
@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  citizens: Citizen[];
  pathology: Pathology;
  toggleHidden: boolean = true;
  hideEdit: boolean = true;
  @Input() value;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      nome: {
        title: 'Nome',
        type: 'string',
      },
      cognome: {
        title: 'Cognome',
        type: 'string',
      },
      ssn: {
        title: 'SSN',
        type: 'string',
      },
      data_nascita: {
        title: 'Data nascita',
        type: 'string',
        filter: false
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      indirizzo: {
        title: 'Indirizzo',
        type: 'string',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          return row.via + " " + row.civico + ", " + row.comune;
        },
      },
      telefono: {
        title: 'Telefono',
        type: 'string',
      },
      categoria: {
        title: 'Categoria',
        type: 'string',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          return row.categoria.nome;
        },
      },
      patologia: {
        title: 'Patologia',
        type: 'string',
        // valuePrepareFunction: (cell, row) => {
        //   this.pathologyService.getPathologyByCitizenId(row.id).subscribe(pathology => this.pathology);
        //   return "AA";
        // },
        filter: false,
      },
      modifica: {
        title: 'Elimina',
        type: 'custom',
        filter: false,
        hide: this.hideEdit,
        valuePrepareFunction: (cell, row) => {
          return row.id;
        },
        renderComponent: EditUserButtonComponent
      },
      prenotazione: {
        title: 'Prenotazione',
        type: 'custom',
        filter: false,
        hide: this.toggleHidden,
        valuePrepareFunction: (cell, row) => {
          return row.ssn;
        },
        renderComponent: NewBookingButtonComponent
      },
    },

  };
  source: LocalDataSource = new LocalDataSource();
  data: Citizen[];

  constructor(private citizenService: CitizenService, private pathologyService: PathologyService, private dialogService: NbDialogService, private route: ActivatedRoute, router: Router) {
    route.params.subscribe(params => {
      if (params['action'] === "show") {
        this.toggleHidden = true;
      } else {
        if (params['action'] === "edit") {
          this.hideEdit = false;
        } else {
          this.toggleHidden = false;
        }
      };
      console.log(params)
    });
    /*This do the trick!*/
    router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {
    this.citizenService.getCitizens().subscribe(citizens => {
      this.citizens = citizens;
      console.log(this.citizens);
      this.source.load(this.citizens);
    });
    //retrieve patologia by citizen id
  }
}

function Schemas(arg0: {}) {
  throw new Error('Function not implemented.');
}

