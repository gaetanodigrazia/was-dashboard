import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionsComponent } from '../shared/table-actions/table-actions.component';
import { NbAccordionModule, NbActionsModule, NbAutocompleteModule, NbBadgeModule, NbButtonModule, NbCardModule, NbChatModule, NbCheckboxModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbTimepickerModule, NbTooltipModule, NbTreeGridModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DialogComponent } from './dialog/dialog.component';





@NgModule({
  declarations: [TableActionsComponent, DialogComponent],
  imports: [
    CommonModule,
    NbCardModule,
    FormsModule,
    NbFormFieldModule,
    NbButtonModule,
    NbInputModule,
    NbListModule,
    NbActionsModule,
    NbIconModule,
    NbSpinnerModule,
    NbTooltipModule,
    NbAccordionModule,
    NbTabsetModule,
    NbDialogModule.forChild(),
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbAutocompleteModule,
    ReactiveFormsModule,
    NbTimepickerModule,
    NbInputModule,
    NbCheckboxModule,
    NbChatModule,
    LeafletModule,
    NbBadgeModule
  ],
  entryComponents:[TableActionsComponent]
})
export class SharedModule { }
