import { ClientVm } from "src/app/components/ClientSchema/models/Client/queries/client-vm";
import { BaseDomainModel } from "src/app/shared/models/base-domain-model";
import { TiempoPlanDeAhorroVm } from "../../TypeBill/queries/tiempo-plan-de-ahorro-vm";

export class PlanAhorroVm  extends BaseDomainModel{
    public clientRef : string;
    public montoDeAhorro : number;
    public tiempoPlanDeAhorroId : string;

    public tiempoPlanDeAhorro:TiempoPlanDeAhorroVm;

    public clientRemote: ClientVm;
}
