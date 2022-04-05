import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, UserListRoutingModule } from '../routing/user-list-routing.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewBookingButtonComponent } from '../button/new-booking-button/new-booking-button.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { NewBookingModalWindowComponent } from '../modal_window/new-booking-modal-window/new-booking-modal-window.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { EditUserButtonComponent } from '../button/edit-user-button/edit-user-button.component';



@NgModule({
  declarations: [...routedComponents, NewBookingButtonComponent, NewBookingModalWindowComponent, EditUserButtonComponent],
  imports: [ThemeModule,
    CommonModule, UserListRoutingModule, NbCardModule, Ng2SmartTableModule,
    NbButtonModule, NbIconModule, NbActionsModule, NbSelectModule, NbDatepickerModule, ngFormsModule, NgxMaterialTimepickerModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class UserListModule { }
