import { Component, Input, OnInit } from '@angular/core';
import { OptionsClient } from '../../../models/Client/options-client';

@Component({
  selector: 'app-filters-client-form',
  templateUrl: './filters-client-form.component.html',
  styleUrls: ['./filters-client-form.component.scss']
})
export class FiltersClientFormComponent implements OnInit {

  @Input()
  public optionsClient:OptionsClient;

  @Input()
  public showFiltersGenericsClient: boolean = false;

  @Input()
  public showFiltersParticular: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
