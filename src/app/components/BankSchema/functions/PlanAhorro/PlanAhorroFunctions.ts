import { UtilsService } from "src/app/shared/service/utils.service";
import { HttpErrorResponse, HttpParams, HttpResponse } from "@angular/common/http";
import { GetParamsStandar } from "src/app/shared/models/pagination-base";
import { v4 as uuidv4 } from 'uuid';
import { Router } from "@angular/router";
import { OptionsBill, PlanAhorroPaginParams } from "../../models/Bill/options-bill";
import { CreatePlanAhorroCommand } from "../../models/Bill/commands/create-plan-ahorro-command";
import { BillService } from "../../services/bill.service";


export function GetParamsPlanAhorro(callClass:string = "",optionsClient: PlanAhorroPaginParams): HttpParams {

  if(callClass == "undefined" || callClass == undefined || callClass == null ){
    callClass = "";
  }

  let params = GetParamsStandar(`${callClass}PlanAhorroPaginParams`,optionsClient);
      
      if (optionsClient.clientRef != null) {
        params = params.append(`${callClass}PlanAhorroPaginParams.ClientRef`, optionsClient.clientRef);
      }
      if (optionsClient.montoDeAhorro != null) {
        params = params.append(`${callClass}PlanAhorroPaginParams.MontoDeAhorro`, optionsClient.montoDeAhorro);
      }

      if (optionsClient.tiempoPlanDeAhorroId != null) {
        params = params.append(`${callClass}PlanAhorroPaginParams.TiempoPlanDeAhorroId`, optionsClient.tiempoPlanDeAhorroId);
      }


      return params;
    
  }

  export function CreatePlanAhorro(client: CreatePlanAhorroCommand, clientService: BillService, router: Router, auxPase1:any){

    clientService
      .registerNewPlanAhorro(
        client
      )
      .subscribe((result: HttpResponse<any>) => {
        if (result.status == 201) {

          router.navigate(['/bank/list-bills']);

        }
      }, (err: HttpErrorResponse) => {
        auxPase1 = uuidv4();
        // console.warn(err);
      });
  }
  
  export function GetPlanesDeAhorro(clientService: BillService, optionsClient: OptionsBill, utilsService:UtilsService){
    GetClientsDb(clientService,optionsClient,utilsService,"GetAll");
  }



  export function GetPlanesDeAhorroNextPage(clientService: BillService, optionsClient: OptionsBill, utilsService:UtilsService){
    GetClientsDb(clientService,optionsClient,utilsService,"NextPage");
  }


  function GetClientsDb(clientService: BillService, optionsClient: OptionsBill, utilsService:UtilsService, callbackMetod: string){
    let params: HttpParams = null;
    let paramsClient = GetParamsPlanAhorro(null,optionsClient.planAhorroPaginParams);

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
        .getAllPlanAhorros(params)
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