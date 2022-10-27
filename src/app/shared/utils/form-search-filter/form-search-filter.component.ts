import { Component, Input, OnInit } from '@angular/core';
import { PaginationBase } from '../../models/pagination-base';

@Component({
  selector: 'app-form-search-filter',
  templateUrl: './form-search-filter.component.html',
  styleUrls: ['./form-search-filter.component.scss']
})
export class FormSearchFilterComponent implements OnInit {

  @Input()
  public paginationBase: PaginationBase;


  constructor() {

  }

  ngOnInit(): void {

  }

}
