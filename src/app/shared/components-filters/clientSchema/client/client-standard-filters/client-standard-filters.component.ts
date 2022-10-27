import { Component, Input, OnInit } from '@angular/core';
import { ClientsPaginParams } from 'src/app/components/ClientSchema/models/Client/options-client';

@Component({
  selector: 'app-client-standard-filters',
  templateUrl: './client-standard-filters.component.html',
  styleUrls: ['./client-standard-filters.component.scss']
})
export class ClientStandardFiltersComponent implements OnInit {

  @Input()
  public showFilters: boolean = false;

  @Input()
  public params:  ClientsPaginParams; 
  
  constructor() { }

  ngOnInit(): void {
  }

  showFiltersAction() {
    this.showFilters = !this.showFilters;
  }

}
