import { PaginationBase } from "src/app/shared/models/pagination-base";
import { StandarBaseQuery } from "src/app/shared/models/standar-base-query";

export class OptionsBill extends PaginationBase {

    public planAhorroPaginParams:PlanAhorroPaginParams = null;

    constructor(){
        super();
        this.planAhorroPaginParams = new PlanAhorroPaginParams();
        this.pageSize = 15;
        this.pageIndex = 1;
        this.isPaging = true;
    }

    public showPerPage: number = 5;
    public totalCount: number = 0;

}

export class PlanAhorroPaginParams extends StandarBaseQuery {
    constructor() {
        super();
    }
    public clientRef: string = null;
    public montoDeAhorro: number = null;
    public tiempoPlanDeAhorroId: string = null;


    resetParams() {
        this.clientRef = null;
        this.montoDeAhorro = null;
        this.tiempoPlanDeAhorroId = null;
    }
}