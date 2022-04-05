import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-edit-user-button',
  templateUrl: './edit-user-button.component.html',
  styleUrls: ['./edit-user-button.component.scss']
})
export class EditUserButtonComponent implements OnInit {
  citizen_id: number;
  @Input() value: number;
  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.citizen_id = this.value;
  }
  newBookingFromCitizen() {
    if (confirm("Vuoi davvero salvare le modifiche?")) {
      console.log("Confirmed edit")
    }
  }
}