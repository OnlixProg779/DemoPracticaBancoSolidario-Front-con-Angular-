import { Component, OnInit } from '@angular/core';
import { ChangeShowSourcePerPage } from 'src/app/shared/functions/functionsShared';
import { GetSettingsService } from 'src/app/shared/service/get-settings.service';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { GetClients, GetClientsNextPage } from '../../../functions/Client/ClientFunctions';
import { OptionsClient } from '../../../models/Client/options-client';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

public optionsClient: OptionsClient = null;

public showFiltersGenericsClient:boolean = false;
public showFiltersParticular:boolean = false;

public color1: string = "btn btn-dark";
public color3: string = "btn btn-dark";

  constructor(
    private clientService: ClientService,
    private utilsService:UtilsService,
    private getSettingsService: GetSettingsService,
  ) { 
    this.optionsClient = new OptionsClient();
  }



  ngOnInit(): void {
    this.getSettingsService.settingsClients(this.optionsClient.showPerPage,"list-client").subscribe((result:Object) => {
      this.optionsClient.settings = result;
    },(err => {
      console.warn(err);
    }));
    GetClients(this.clientService,this.optionsClient, this.utilsService);
    this.initOnChagedDataTable();

  }

  changeShowPerPage(event:number){

    ChangeShowSourcePerPage(this.optionsClient, event);
  }

  initOnChagedDataTable(){
    this.optionsClient.source.onChanged().subscribe((change) => {
      if (change.action === 'paging') {
        if(this.optionsClient.source.count() <= change.paging.perPage){
          this.changePagueSourceClient(1);
        }
      }
      if (change.action === 'page') {
        
          this.changePagueSourceClient(change.paging.page);
      }
    });
  }
  
  changePagueSourceClient(pageIndex){
    var getNew = pageIndex * this.optionsClient.showPerPage;
    if (getNew >= this.optionsClient.source.count() && getNew < this.optionsClient.totalCount) {
      this.optionsClient.pageIndex = this.optionsClient.pageIndex + 1;
      GetClientsNextPage(this.clientService,this.optionsClient, this.utilsService);
    }
  }

  searchData(){
    this.optionsClient.pageIndex = 1;
    GetClients(this.clientService,this.optionsClient, this.utilsService);
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
    this.optionsClient.resetParams();
    this.optionsClient.clientsPaginParams.resetParams();
  }
}