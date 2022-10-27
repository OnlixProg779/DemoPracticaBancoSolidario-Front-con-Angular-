import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';
import { MultiSelComponent, ResourceMultiSel } from '../multi-sel/multi-sel.component';

@Injectable({
  providedIn: 'root'
})
export class GetSettingsService {

  constructor() { }

  settingsClients(showPerPage: number, callTo: string):Observable<Object> {

    return new Observable(observer => {
      // var decoded: any = jwt_decode(sessionStorage.getItem('bearerToken')); // decodificamos para analizar el rol del usuario y asi asignar diferentes propiedades a la tabla
      var settings:Object = null;
      settings = {
        mode: 'external',
        pager: {
          display: true,
          perPage: showPerPage,
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
          cedula: {
            title: 'C.I.',
            filter: false,
          },
  
          nombre: {
            title: 'Name',
            filter: false,
            type: 'custom',
            valuePrepareFunction: (value, row, cell) => {
              var sentData: ResourceMultiSel = new ResourceMultiSel();
              sentData.action = [];
              sentData.styl = [];
              sentData.stepClass = [];
              sentData.icon = [];

              sentData.action.push(`${value}`);
              sentData.stepClass.push('btn btn-outline ');
              sentData.styl.push('line-height: 1;text-transform: initial;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 0.25rem;padding: 0.25em 0.4em;display:inline-block;font-size: 115%;color:#17a2b8;cursor: pointer;');
  
              return sentData;
            },
            renderComponent: MultiSelComponent,
            onComponentInitFunction: (instance) => {
              instance.save.subscribe((item) => {
                // console.log(item);
                // console.log(instance);
                // this.router.navigate(['/clients/bills/' + item.entity.receivedBox.postBox.client.clientId]);
  
              });
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
            title: 'Actions',
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
                sentData.action.push(`Edit`);
                sentData.icon.push(`codepen`);
                sentData.stepClass.push('btn btn-outline col-12');
                sentData.styl.push('background-color: #1e7915;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: 1rem;padding: 0.4em 0.4em;display:inline-block;font-size: 95%;color:white;cursor: auto;');
              }

  
              return sentData;
            },
            renderComponent: MultiSelComponent,
            onComponentInitFunction: (instance) => {
  
            },
          },
        },
      };

      observer.next(settings);
      observer.complete();
    
  })

  }
}