import { HttpParams } from "@angular/common/http";
import { LocalDataSource } from "ng2-smart-table";
import { StandarBaseQuery } from "./standar-base-query";

export class PaginationBase {


        constructor(){
            this.source = new LocalDataSource();
        }

        public settings: Object; // Setting para la tabla
        public source: LocalDataSource; //para la tabla

        public sort: string= null;
        public searchQuery : string= null;

        public pageIndex : number= null; // es CurrentPage
        public pageSize : number= null;

        public isPaging :boolean= null;

       resetParams(){
         this.searchQuery = null;
         this.sort = null;
       }
}

export function GetParamsStandar(prename: string = "",options: StandarBaseQuery): HttpParams {

  if(prename == "undefined" || prename == undefined || prename == null ){
    prename = "";
  }
    let params = new HttpParams();
    
    if (options.active != null) {
      params = params.append(`${prename}.Active`, options.active);
    }
    if (options.showToUserMed != null) {
      params = params.append(`${prename}.ShowToUserMed`, options.showToUserMed);
    }
    if (options.createdDateFrom != null) {
      params = params.append(`${prename}.CreatedDateFrom`, options.createdDateFrom.toString());
    }
    if (options.createdDateTo != null) {
      params = params.append(`${prename}.CreatedDateTo`, options.createdDateTo.toString());
    }
    if (options.createdBy != null) {
      params = params.append(`${prename}.CreatedBy`, options.createdBy);
    }
    if (options.lastModifiedDateFrom != null) {
      params = params.append(`${prename}.LastModifiedDateFrom`, options.lastModifiedDateFrom.toString());
    }
    if (options.lastModifiedDateTo != null) {
      params = params.append(`${prename}.LastModifiedDateTo`, options.lastModifiedDateTo.toString());
    }
    if (options.lastModifiedBy != null) {
      params = params.append(`${prename}.LastModifiedBy`, options.lastModifiedBy);
    }
    if (options.editable != null) {
      params = params.append(`${prename}.Editable`, options.editable);
    }
    if (options.borrable != null) {
      params = params.append(`${prename}.Borrable`, options.borrable);
    }
    
    return params;
  
}