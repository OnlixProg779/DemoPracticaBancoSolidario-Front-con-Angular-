import { Component, Input, OnInit } from '@angular/core';
import { StandarBaseQuery } from '../../models/standar-base-query';

@Component({
  selector: 'app-generic-filters',
  templateUrl: './generic-filters.component.html',
  styleUrls: ['./generic-filters.component.scss']
})
export class GenericFiltersComponent implements OnInit {

  @Input()
  public showFilters: boolean = false;

  @Input()
  public paramsGenerics:  StandarBaseQuery; 

  constructor() { }

  ngOnInit(): void {
  }





}
