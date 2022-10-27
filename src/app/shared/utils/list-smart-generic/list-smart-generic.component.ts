import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-smart-generic',
  templateUrl: './list-smart-generic.component.html',
  styleUrls: ['./list-smart-generic.component.scss']
})
export class ListSmartGenericComponent implements OnInit {

  @Input()
  tittle: string = null;

  @Input()
  showQuickFilters: boolean = true;

  @Input()
  showButtonSearchFilters: boolean = true;

  @Input()
  settings: Object;

  @Input()
  source: any;

  @Input()
  totalCount:number

  @Input()
  showPerPage:number;

  @Input()
  routeCreate:string = null;


  
  @Output()
  changeShowPerPage: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

  changeSettingsTable() {
    // console.log(this.showPerPage);
    this.changeShowPerPage.emit(this.showPerPage);
  }

}
