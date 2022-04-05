import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Citizen } from '../../../../model/citizen';
import { CitizenService } from '../../../../shared/citizen.service';

@Component({
  selector: 'ngx-show-citizen-modal-window',
  templateUrl: './show-citizen-modal-window.component.html',
  styleUrls: ['./show-citizen-modal-window.component.scss']
})
export class ShowCitizenModalWindowComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  citizen: Citizen | any = "";// Mi restituiva errori nella console per via del fatto che il cittadino viene fetchato
  // qualche secondo dopo e risultava essere undefined quindi l'ho inizializzato
  constructor(protected ref: NbDialogRef<ShowCitizenModalWindowComponent>, private citizen_service: CitizenService) { }
  @Input() toDialogSSN: any;

  ngOnInit(): void {
    this.citizen_service.getBySSN(this.toDialogSSN).subscribe(result => {
      this.citizen = result;
      console.log(this.citizen);
      console.log(this.citizen.ref_categoria);
    });
  }
  cancel() {
    this.ref.close(false);
  }

  submit(firstname, lastname, email, cellphone) {
    this.citizen.firstname = firstname;
    this.citizen.lastname = lastname;
    this.citizen.email = email;
    this.citizen.cellphone = cellphone;
    if (confirm("Vuoi davvero salvare le modifiche?")) {
      this.citizen_service.updateCitizen(this.citizen).subscribe(() => this.ref.close());

    }

  }

}
