import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClientVm } from 'src/app/components/ClientSchema/models/Client/queries/client-vm';
import { ChangeShowSourcePerPage } from 'src/app/shared/functions/functionsShared';
import { MultiSelComponent, ResourceMultiSel } from 'src/app/shared/multi-sel/multi-sel.component';
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
      this.initSettings();

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
  
    public clientSelected: ClientVm = null;
    resetParams(){
      this.optionsBill.resetParams();
      this.optionsBill.planAhorroPaginParams.resetParams();
    }

    initSettings(){
      this.optionsBill.settings = {
        mode: 'external',
        pager: {
          display: true,
          perPage: this.optionsBill.showPerPage,
        },
        actions: {
          add: false,
          edit: false,
          delete: false,
          position: 'right',
        },
        columns: {

          createdDate: {
            title: 'Since',
            filter: false,
            type: 'custom',
            valuePrepareFunction: (value, row, cell) => {
              var sentData: ResourceMultiSel = new ResourceMultiSel();
              sentData.action = [];
              sentData.styl = [];
              sentData.stepClass = [];
              sentData.icon = [];

              if (!row.active) {
                sentData.action.push(new DatePipe('en-US').transform(value, 'd/MMM/yyyy'));
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('background-color: #de1e1e;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
              } else {
  
                sentData.action.push(new DatePipe('en-US').transform(value, 'd/MMM/yyyy'));
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:black;cursor: auto;');
  
                sentData.action.push(new DatePipe('en-US').transform(value, 'h:mm a'));
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:black;cursor: auto;');
  
              }
              return sentData;
            },
            renderComponent: MultiSelComponent,
          },
          cuenta: {
            title: 'Ver Proyeccion',
            filter: false,
            type: 'custom',
            valuePrepareFunction: (value, row, cell) => {
              var sentData: ResourceMultiSel = new ResourceMultiSel();
              sentData.action = [];
              sentData.styl = [];
              sentData.stepClass = [];
              sentData.icon = [];
  
  
              if (row.active) {

                sentData.action.push(`Revisar`);
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('background-color: #047aa2;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.8em 0.8em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
             
              }
              return sentData;
            },
            renderComponent: MultiSelComponent,
            onComponentInitFunction: (instance) => {
              instance.save.subscribe((item) => {
                console.log(item);
                if(item.option == 'Revisar'){
                  console.log(item)
                  this.clientSelected = item.entity;
                }
                
              
              });         
            },
          },
          clientRemote: {
            title: 'Cliente',
            filter: false,
            type: 'custom',
            valuePrepareFunction: (value, row, cell) => {
              var sentData: ResourceMultiSel = new ResourceMultiSel();
              sentData.action = [];
              sentData.styl = [];
              sentData.stepClass = [];
              sentData.icon = [];

              sentData.action.push(`${value.nombre}`);
              sentData.stepClass.push('btn btn-outline ');
              sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 115%;color:dark;cursor: auto;');
  
              sentData.action.push(`CI. ${value.cedula}`);
              sentData.stepClass.push('btn btn-outline btn-sm');
              sentData.styl.push('background-color: #c3ddf3;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:#060505;cursor: auto;');
  
              return sentData;
            },
            renderComponent: MultiSelComponent,
            onComponentInitFunction: (instance) => {
  
            },
          },
          montoDeAhorro: {
            title: 'montoDeAhorro',
            filter: false,
            valuePrepareFunction: (value, row, cell) => {
              return `$${value}`;
            }
          },

          location: {
            title: 'Info',
            filter: false,
            type: 'custom',
            valuePrepareFunction: (value, row, cell) => {
              var sentData: ResourceMultiSel = new ResourceMultiSel();
              sentData.action = [];
              sentData.styl = [];
              sentData.stepClass = [];
              sentData.icon = [];
  
  
              if (!row.active) {
                sentData.action.push(`Interes ${row.tiempoPlanDeAhorro.tipoDeInteres}`);
                sentData.stepClass.push('btn btn-success');
                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
  
  
                sentData.action.push(`X ${row.tiempoPlanDeAhorro.meses} meses`);
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
  
                sentData.action.push(`${row.tiempoPlanDeAhorro.tasaDeInteresAnual}% de interes anual`);
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('background-color: red;text-transform: initial;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
              } else {
  
                sentData.action.push(`Interes ${row.tiempoPlanDeAhorro.tipoDeInteres}`);
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('background-color: #4187d2;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
                
                sentData.action.push(`X ${row.tiempoPlanDeAhorro.meses} meses`);
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
  
                sentData.action.push(`${row.tiempoPlanDeAhorro.tasaDeInteresAnual}% de interes anual`);
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 95%;color:dark;cursor: auto;');
  
              }
  
              return sentData;
            },
            renderComponent: MultiSelComponent,
            onComponentInitFunction: (instance) => {
  
            },
          },
          control: {
            title: 'Control',
            filter: false,
            type: 'custom',
            valuePrepareFunction: (value, row, cell) => {
              var sentData: ResourceMultiSel = new ResourceMultiSel();
              sentData.action = [];
              sentData.styl = [];
              sentData.stepClass = [];
              sentData.icon = [];

  
              if (!row.active) {
                sentData.action.push(`Deleted`);
                sentData.stepClass.push('btn btn-outline col-12');
                sentData.styl.push('background-color: #de1e1e;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
  
              } else {  
                sentData.action.push(`Active`);
                sentData.stepClass.push('btn btn-outline col-12');
                sentData.styl.push('background-color: #1e7915;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
              }

              if (!row.borrable) {
                sentData.action.push(`No Erasable`);
                sentData.stepClass.push('btn btn-outline col-12');
                sentData.styl.push('background-color: #de1e1e;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
  
              } else {  
                sentData.action.push(`Erasable`);
                sentData.stepClass.push('btn btn-outline col-12');
                sentData.styl.push('background-color: #1e7915;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
              }

              if (!row.editable) {
                sentData.action.push(`No Editable`);
                sentData.stepClass.push('btn btn-outline col-12');
                sentData.styl.push('background-color: #de1e1e;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
  
              } else {  
                sentData.action.push(`Editable`);
                sentData.stepClass.push('btn btn-outline col-12');
                sentData.styl.push('background-color: #1e7915;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
              }

              if (!row.showToUserMed) {
                sentData.action.push(`No Visible`);
                sentData.stepClass.push('btn btn-outline col-12');
                sentData.styl.push('background-color: #de1e1e;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
  
              } else {  
                sentData.action.push(`Visible`);
                sentData.stepClass.push('btn btn-outline col-12');
                sentData.styl.push('background-color: #1e7915;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
              }
  
              return sentData;
            },
            renderComponent: MultiSelComponent,
            onComponentInitFunction: (instance) => {
  
            },
          },
          actions: {
            title: 'A',
            filter: false,
            type: 'custom',
            valuePrepareFunction: (value, row, cell) => {
              var sentData: ResourceMultiSel = new ResourceMultiSel();
              sentData.action = [];
              sentData.styl = [];
              sentData.stepClass = [];
              sentData.icon = [];
  
  
              if (!row.active) {
                sentData.action.push(`Restore`);
                sentData.icon.push(`rotate-ccw`);
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:black;cursor: pointer;');
  
              } else {  
                sentData.action.push(`Delete`);
                sentData.icon.push(`delete`);
                sentData.stepClass.push('btn btn-outline');
                sentData.styl.push('line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:red;cursor: pointer;');
              }
              return sentData;
            },
            renderComponent: MultiSelComponent,
            onComponentInitFunction: (instance) => {
              instance.save.subscribe((item) => {
                console.log(item);
                if(item.option == 'Restore'){

                }
                if(item.option == 'Delete'){
                  
                }
                // this.router.navigate(['/clients/bills/' + item.entity.receivedBox.postBox.client.clientId]);
              
              });         
            },
          },
        },
      };
    }
}
