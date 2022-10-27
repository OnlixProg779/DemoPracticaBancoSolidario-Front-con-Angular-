import { PaginationBase } from "src/app/shared/models/pagination-base";
import { StandarBaseQuery } from "src/app/shared/models/standar-base-query";

export class OptionsTypeBill extends PaginationBase{

    public tiempoPlanDeAhorroPaginParams:TiempoPlanDeAhorroPaginParams = null;

    constructor(){
        super();
        this.tiempoPlanDeAhorroPaginParams = new TiempoPlanDeAhorroPaginParams();
        this.pageSize = 15;
        this.pageIndex = 1;
        this.isPaging = true;
    }

    public showPerPage: number = 5;
    public totalCount: number = 0;

}

export class TiempoPlanDeAhorroPaginParams extends StandarBaseQuery
{
  constructor(){
    super();
}
    public meses : number = null;
    public tasaDeInteresAnual : number= null;
    public tipoDeInteres : string= null;


    resetParams(){
        this.meses= null;
        this.tasaDeInteresAnual= null;
        this.tipoDeInteres= null;
    }
}