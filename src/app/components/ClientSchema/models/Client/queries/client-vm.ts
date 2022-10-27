import { BaseDomainModel } from "src/app/shared/models/base-domain-model";
import { ApplicationUserVm } from "./application-user-vm";

export class ClientVm extends BaseDomainModel{
    public  type : string;
    public  gender : string;
    public  dni : string;
    public  applicationUserRef : string;
    public  image : string;
    public  serie : number;
    public  city : string;
    public  instagram : string;

    public  agencyId : string;

    // Application User
    public userVm : ApplicationUserVm;
}
