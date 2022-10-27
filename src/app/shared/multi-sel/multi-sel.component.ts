import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-multi-sel',
  templateUrl: './multi-sel.component.html',
  styleUrls: ['./multi-sel.component.scss']
})
export class MultiSelComponent implements ViewCell, OnInit {

  @Input() value;
  @Input() rowData: any;

  model: ResourceMultiSel = new ResourceMultiSel();

  @Output() save: EventEmitter<SentActionPatchDeposit> = new EventEmitter<SentActionPatchDeposit>();

  constructor(
    
  ) { }


  ngOnInit(): void {

    this.separarData(this.value);
  }

  private separarData(value: ResourceMultiSel) {
    this.model.action = value.action;
    this.model.renderOptions = value.renderOptions;
    this.model.stepClass = value.stepClass;
    this.model.styl = value.styl;
    this.model.icon = value.icon;
      
  }

  onClick(action: string) {
    var aux = new SentActionPatchDeposit();
    aux.entity = this.rowData;
    aux.option = action;
    this.save.emit(aux);
  }

}
export class SentActionPatchDeposit {
  constructor() { }

  entity: any;
  option: string;
  csvTableData: any[];
  public csvTableHeader: any[];
}
export class ResourceMultiSel {
  constructor() { }

  renderOptions: string[];
  stepClass: string[];
  action: string[];
  styl: string[];
  icon: string[];
  entity: any;
}

