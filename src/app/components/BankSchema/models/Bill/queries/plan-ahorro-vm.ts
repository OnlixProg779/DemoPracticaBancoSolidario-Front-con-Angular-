import { BaseDomainModel } from "src/app/shared/models/base-domain-model";

export class PlanAhorroVm  extends BaseDomainModel{
    public clientRef : string;
    public montoDeAhorro : number;
    public tiempoPlanDeAhorroId : string;

}
