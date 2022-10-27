import { InfoResponseVm } from "./info-response-vm";

export class BaseDomainModel {
    public id : string;
    
    public createdDate : Date;

    public createdBy : string;

    public lastModifiedDate : Date;

    public lastModifiedBy : string;

    public editable : boolean;

    public borrable : boolean;

    public active : boolean;

    public ahowToUserMed : boolean;

    public response:InfoResponseVm;
}
