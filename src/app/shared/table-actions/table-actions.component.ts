import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Action{
  action:string;
  enabled:boolean;
  status:string;
  icon:string;
  tooltip:string;
}

@Component({
  selector: 'ngx-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent implements OnInit {

  constructor() { }

  @Input() value;

  @Output() onCustom = new EventEmitter<string>();

  actions:Array<Action>;

  ngOnInit(): void {
    this.actions=this.value;
  }

  onCustomClicked(val){
    this.onCustom.emit(val);
  }

}
