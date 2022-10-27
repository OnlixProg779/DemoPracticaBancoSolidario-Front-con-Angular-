import { UtilsService } from "src/app/shared/service/utils.service";
import { ClientService } from "../../services/client.service";
import { HttpErrorResponse, HttpParams, HttpResponse } from "@angular/common/http";
import { GetParamsStandar } from "src/app/shared/models/pagination-base";
import { ClientsPaginParams, OptionsClient } from "../../models/Client/options-client";
import { v4 as uuidv4 } from 'uuid';
import { Router } from "@angular/router";
import { CreateClientCommand } from "../../models/Client/commands/create-client-command";
import { ClientVm } from "../../models/Client/queries/client-vm";


export function GetParamsClients(callClass:string = "",optionsClient: ClientsPaginParams): HttpParams {

  if(callClass == "undefined" || callClass == undefined || callClass == null ){
    callClass = "";
  }

  let params = GetParamsStandar(`${callClass}clientPaginParams`,optionsClient);
      
      if (optionsClient.cedula != null) {
        params = params.append(`${callClass}clientPaginParams.Cedula`, optionsClient.cedula);
      }
      if (optionsClient.nombre != null) {
        params = params.append(`${callClass}clientPaginParams.Nombre`, optionsClient.nombre);
      }


      return params;
    
  }

  
  export function GetClients(clientService: ClientService, optionsClient: OptionsClient, utilsService:UtilsService){
    GetClientsDb(clientService,optionsClient,utilsService,"GetAll");
  }



  export function GetClientsNextPage(clientService: ClientService, optionsClient: OptionsClient, utilsService:UtilsService){
    GetClientsDb(clientService,optionsClient,utilsService,"NextPage");
  }


  function GetClientsDb(clientService: ClientService, optionsClient: OptionsClient, utilsService:UtilsService, callbackMetod: string){
    let params: HttpParams = null;
    let paramsClient = GetParamsClients(null,optionsClient.clientsPaginParams);

    utilsService.concatHttpParams([paramsClient]).subscribe((result:HttpParams) => {
      params = result;

      if (optionsClient.searchQuery != null) {
        params = params.append(`SearchQuery`, optionsClient.searchQuery);
      }

      if (optionsClient.sort != null) {
        params = params.append(`Sort`, optionsClient.sort);
      }
  
      if (optionsClient.isPaging != null) {
        params = params.append(`IsPaging`, optionsClient.isPaging);
      }
  
      if (optionsClient.pageIndex != null) {
        params = params.append(`PageIndex`, optionsClient.pageIndex.toString());
      }
  
      if (optionsClient.pageSize != null) {
        params = params.append(`PageSize`, optionsClient.pageSize.toString());
      }
      clientService
        .getAllClients(params)
        .subscribe((result: HttpResponse<any>) => {
          if (!result) {
            return;
          }
          if (result.status == 200) {
  
            if(callbackMetod == "GetAll"){
              optionsClient.source.load(result.body);
              optionsClient.totalCount = JSON.parse(result.headers.get('X-Pagination'));
              optionsClient.totalCount = optionsClient.totalCount['totalCount'];
            }
            else if("NextPage"){
              result.body.forEach((element) => {
                optionsClient.source.add(element);
              });
            }
            
          }
        }, (err: HttpErrorResponse) => {
          console.warn(err);
        });
  
    },  (err) => {
      console.warn(err);
    });
  }