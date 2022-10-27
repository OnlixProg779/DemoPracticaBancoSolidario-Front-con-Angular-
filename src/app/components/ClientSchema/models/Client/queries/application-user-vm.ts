import { BaseDomainModel } from "src/app/shared/models/base-domain-model";

export class ApplicationUserVm extends BaseDomainModel{
    public  identityId : string;
    public  fullName  : string;
    public  instagram  : string;

    public  email  : string;
    public  phone : string;
    public  dateOfBirth: Date;
    public  country : string;

    public  age: number;
}
