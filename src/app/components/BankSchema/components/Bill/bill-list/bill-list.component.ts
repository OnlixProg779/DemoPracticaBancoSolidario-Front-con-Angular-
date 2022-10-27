import { Component, OnInit } from '@angular/core';
import { ChangeShowSourcePerPage } from 'src/app/shared/functions/functionsShared';
import { GetSettingsService } from 'src/app/shared/service/get-settings.service';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { GetPlanesDeAhorro, GetPlanesDeAhorroNextPage } from '../../../functions/PlanAhorro/PlanAhorroFunctions';
import { OptionsBill } from '../../../models/Bill/options-bill';
import { BillService } from '../../../services/bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {


  public optionsBill: OptionsBill = null;

  public showFiltersGenericsClient:boolean = false;
  public showFiltersParticular:boolean = false;
  
  public color1: string = "btn btn-dark";
  public color3: string = "btn btn-dark";
  
    constructor(
      private billService: BillService,
      private utilsService:UtilsService,
      private getSettingsService: GetSettingsService,
    ) { 
      this.optionsBill = new OptionsBill();
    }
  
  
  
    ngOnInit(): void {
      this.getSettingsService.settingsPlanAhorro(this.optionsBill.showPerPage,"list-plan-ahorro").subscribe((result:Object) => {
        this.optionsBill.settings = result;
      },(err => {
        console.warn(err);
      }));

      GetPlanesDeAhorro(this.billService,this.optionsBill, this.utilsService);
      this.initOnChagedDataTable();
  
    }
  
    changeShowPerPage(event:number){
  
      ChangeShowSourcePerPage(this.optionsBill, event);
    }
  
    initOnChagedDataTable(){
      this.optionsBill.source.onChanged().subscribe((change) => {
        if (change.action === 'paging') {
          if(this.optionsBill.source.count() <= change.paging.perPage){
            this.changePagueSourcePlanAhorro(1);
          }
        }
        if (change.action === 'page') {
          
            this.changePagueSourcePlanAhorro(change.paging.page);
        }
      });
    }
    
    changePagueSourcePlanAhorro(pageIndex){
      var getNew = pageIndex * this.optionsBill.showPerPage;
      if (getNew >= this.optionsBill.source.count() && getNew < this.optionsBill.totalCount) {
        this.optionsBill.pageIndex = this.optionsBill.pageIndex + 1;
        GetPlanesDeAhorroNextPage(this.billService,this.optionsBill, this.utilsService);
      }
    }
  
    searchData(){
      this.optionsBill.pageIndex = 1;
      GetPlanesDeAhorro(this.billService,this.optionsBill, this.utilsService);
    }
  
    showFiltersGenericsClientAction() {
      if(this.color3 == "btn btn-dark"){
        this.showFiltersGenericsClient = true;
        this.showFiltersParticular = false;
  
        this.color3 = "btn btn-info";
        this.color1 = "btn btn-dark";
      }else{
        this.color3 = "btn btn-dark";
        this.showFiltersGenericsClient = false;
      }
    }
  
    showFiltersParticularAction() {
      if(this.color1 == "btn btn-dark"){
        this.showFiltersParticular = true;
        this.showFiltersGenericsClient = false;
        
        this.color1 = "btn btn-info";
        this.color3 = "btn btn-dark";
      }else{
        this.showFiltersParticular = false;
        this.color1 = "btn btn-dark";
      }
    }
  
    resetParams(){
      this.optionsBill.resetParams();
      this.optionsBill.planAhorroPaginParams.resetParams();
    }

}
