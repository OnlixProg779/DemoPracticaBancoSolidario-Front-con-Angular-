import { Component, Input, OnInit } from '@angular/core';
import { OptionsBill } from '../../../models/Bill/options-bill';

@Component({
  selector: 'app-filters-plan-ahorro-form',
  templateUrl: './filters-plan-ahorro-form.component.html',
  styleUrls: ['./filters-plan-ahorro-form.component.scss']
})
export class FiltersPlanAhorroFormComponent implements OnInit {

  @Input()
  public optionsBill:OptionsBill;

  @Input()
  public showFiltersGenericsPlanAhorro: boolean = false;

  @Input()
  public showFiltersParticular: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
