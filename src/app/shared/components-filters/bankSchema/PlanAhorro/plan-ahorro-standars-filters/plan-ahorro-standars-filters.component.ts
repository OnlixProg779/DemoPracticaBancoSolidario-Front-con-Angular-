import { Component, Input, OnInit } from '@angular/core';
import { PlanAhorroPaginParams } from 'src/app/components/BankSchema/models/Bill/options-bill';

@Component({
  selector: 'app-plan-ahorro-standars-filters',
  templateUrl: './plan-ahorro-standars-filters.component.html',
  styleUrls: ['./plan-ahorro-standars-filters.component.scss']
})
export class PlanAhorroStandarsFiltersComponent implements OnInit {

  @Input()
  public showFilters: boolean = false;

  @Input()
  public params:  PlanAhorroPaginParams; 
  
  constructor() { }

  ngOnInit(): void {
  }

  showFiltersAction() {
    this.showFilters = !this.showFilters;
  }

}
