import { PaginationBase } from "src/app/shared/models/pagination-base";
import { StandarBaseQuery } from "src/app/shared/models/standar-base-query";


export class OptionsClient extends PaginationBase{

    // parameters de busqueda
    public clientsPaginParams:ClientsPaginParams = null;

    constructor(){
        super();
        this.clientsPaginParams = new ClientsPaginParams();
        this.pageSize = 15;
        this.pageIndex = 1;
        this.isPaging = true;
    }

    public showPerPage: number = 5;
    public totalCount: number = 0;

}



export class ClientsPaginParams extends StandarBaseQuery
{
  constructor(){
    super();
}
    public cedula : string= null;
    public nombre : string= null;


    resetParams(){
        this.cedula= null;
        this.nombre= null;
    }
}



