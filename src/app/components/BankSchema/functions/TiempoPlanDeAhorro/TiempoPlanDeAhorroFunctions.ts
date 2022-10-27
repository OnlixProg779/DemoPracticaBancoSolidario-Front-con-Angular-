import { UtilsService } from "src/app/shared/service/utils.service";
import { HttpErrorResponse, HttpParams, HttpResponse } from "@angular/common/http";
import { GetParamsStandar } from "src/app/shared/models/pagination-base";
import { v4 as uuidv4 } from 'uuid';
import { Router } from "@angular/router";
import { OptionsTypeBill, TiempoPlanDeAhorroPaginParams } from "../../models/TypeBill/options-type-bill";
import { CreateTiempoPlanDeAhorroCommand } from "../../models/TypeBill/commands/create-tiempo-plan-de-ahorro-command";
import { TypeBillService } from "../../services/type-bill.service";
import { TiempoPlanDeAhorroVm } from "../../models/TypeBill/queries/tiempo-plan-de-ahorro-vm";


export function GetParamsTiempoPlanDeAhorro(callClass:string = "",optionsClient: TiempoPlanDeAhorroPaginParams): HttpParams {

  if(callClass == "undefined" || callClass == undefined || callClass == null ){
    callClass = "";
  }

  let params = GetParamsStandar(`${callClass}TiempoPlanDeAhorroPaginParams`,optionsClient);
      
      if (optionsClient.meses != null) {
        params = params.append(`${callClass}TiempoPlanDeAhorroPaginParams.meses`, optionsClient.meses);
      }
      if (optionsClient.tasaDeInteresAnual != null) {
        params = params.append(`${callClass}TiempoPlanDeAhorroPaginParams.tasaDeInteresAnual`, optionsClient.tasaDeInteresAnual);
      }

      if (optionsClient.tipoDeInteres != null) {
        params = params.append(`${callClass}TiempoPlanDeAhorroPaginParams.tipoDeInteres`, optionsClient.tipoDeInteres);
      }

      return params;
    
  }

  export function CreateTiempoPlanDeAhorro(client: CreateTiempoPlanDeAhorroCommand, clientService: TypeBillService, router: Router, auxPase1:any){

    clientService
      .registerNewTiempoPlanDeAhorro(
        client
      )
      .subscribe((result: HttpResponse<any>) => {
        if (result.status == 201) {

          router.navigate(['/clients/list-client']);

        }
      }, (err: HttpErrorResponse) => {
        auxPase1 = uuidv4();
        // console.warn(err);
      });
  }
  
  export function GetClients(clientService: TypeBillService, optionsClient: OptionsTypeBill, utilsService:UtilsService){
    GetClientsDb(clientService,optionsClient,utilsService,"GetAll");
  }



  export function GetClientsNextPage(clientService: TypeBillService, optionsClient: OptionsTypeBill, utilsService:UtilsService){
    GetClientsDb(clientService,optionsClient,utilsService,"NextPage");
  }


  function GetClientsDb(clientService: TypeBillService, optionsClient: OptionsTypeBill, utilsService:UtilsService, callbackMetod: string){
    let params: HttpParams = null;
    let paramsClient = GetParamsTiempoPlanDeAhorro(null,optionsClient.tiempoPlanDeAhorroPaginParams);

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
        .getAllTiempoPlanDeAhorro(params)
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

