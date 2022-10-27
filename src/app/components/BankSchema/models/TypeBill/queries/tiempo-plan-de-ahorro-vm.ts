import { BaseDomainModel } from "src/app/shared/models/base-domain-model";

export class TiempoPlanDeAhorroVm  extends BaseDomainModel{
    public meses :number;
    public tasaDeInteresAnual :number;
    public tipoDeInteres :string;
}
