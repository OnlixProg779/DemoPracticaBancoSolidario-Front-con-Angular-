import { HttpParams } from "@angular/common/http";
import { PaginationBase } from "src/app/shared/models/pagination-base";
import { ApplicationUserPaginParams, ClientsPaginParams, GetParamsClients } from "./options-client";

export class OptionsClientWPostBox extends PaginationBase {
        // parameters de busqueda
        public clientsWPostBoxPaginParams:ClientsWPostBoxPaginParams = null;
    
        constructor(){
            super();
            this.clientsWPostBoxPaginParams = new ClientsWPostBoxPaginParams();
            this.pageSize = 15;
            this.pageIndex = 1;
            this.isPaging = true;
        }
    
        public showPerPage: number = 5;
        public totalCount: number = 0;
        
}

export class ClientsWPostBoxPaginParams
{
    public clientsPaginParams:ClientsPaginParams = null;
    public applicationUserPaginParams:ApplicationUserPaginParams = null;

  constructor(){
    this.clientsPaginParams = new ClientsPaginParams();
    this.applicationUserPaginParams = new ApplicationUserPaginParams();
}

}

// export function GetParamsClientsWPostBox(callClass:string = "",optionsClient: OptionsClientWPostBox): HttpParams {
//     console.log(optionsClient)
//       let params = GetParamsClients(`${callClass}clientsPaginParams`,optionsClient.clientsPaginParams,optionsClient);
      
//       // if (optionsClient.clientsPaginParams.gender != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Gender`, optionsClient.clientsPaginParams.gender);
//       // }
//       // if (optionsClient.clientsPaginParams.dni != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Dni`, optionsClient.clientsPaginParams.dni);
//       // }
//       // if (optionsClient.clientsPaginParams.serie != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Serie`, optionsClient.clientsPaginParams.serie);
//       // }
//       // if (optionsClient.clientsPaginParams.type != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Type`, optionsClient.clientsPaginParams.type);
//       // }
//       // if (optionsClient.clientsPaginParams.agencyId != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.AgencyId`, optionsClient.clientsPaginParams.agencyId);
//       // }
//       // if (optionsClient.clientsPaginParams.city != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.City`, optionsClient.clientsPaginParams.city);
//       // }
//       // if (optionsClient.clientsPaginParams.instagram != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Instagram`, optionsClient.clientsPaginParams.instagram);
//       // }
//       // if (optionsClient.applicationUserPaginParams.phone != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Phone`, optionsClient.applicationUserPaginParams.phone);
//       // }
//       // if (optionsClient.applicationUserPaginParams.country != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.Country`, optionsClient.applicationUserPaginParams.country);
//       // }
//       // if (optionsClient.applicationUserPaginParams.dateOfBirth != null) {
//       //   params = params.append(`${callClass}clientsPaginParams.DateOfBirth`, optionsClient.applicationUserPaginParams.dateOfBirth.toString());
//       // }
      
//       return params;
    
//   }
  
