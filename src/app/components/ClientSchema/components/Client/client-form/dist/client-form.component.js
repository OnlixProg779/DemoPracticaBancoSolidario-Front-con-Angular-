"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ClientFormComponent = /** @class */ (function () {
    function ClientFormComponent(formBuilder, validatorService) {
        this.formBuilder = formBuilder;
        this.validatorService = validatorService;
        this.submit = new core_1.EventEmitter();
    }
    ClientFormComponent.prototype.ngOnInit = function () {
        this.createAccountForm();
        // Para el uptade
        if (this.modelo !== undefined) {
            console.log(this.modelo);
            this.accountForm.patchValue(this.modelo);
        }
    };
    ClientFormComponent.prototype.createAccountForm = function () {
        this.accountForm = this.formBuilder.group({
            nombre: [
                '',
                {
                    validators: [forms_1.Validators.required]
                },
            ],
            apellidos: [
                '',
                {
                    validators: [forms_1.Validators.required]
                },
            ],
            instagram: [''],
            city: ['',
                {
                    validators: [forms_1.Validators.required]
                },
            ],
            email: [''],
            phone: ['']
        });
    };
    ClientFormComponent.prototype.save = function () {
        if (this.accountForm.valid) {
            var aux = this.accountForm.value;
            if (this.auxPase1 !== this.auxPase2) {
                this.clientSentCreateDto = aux;
                this.auxPase2 = this.auxPase1;
                this.submit.emit(this.clientSentCreateDto);
            }
        }
        else {
            this.accountForm.markAllAsTouched();
            console.log('FORM NOT VALID');
            return;
        }
    };
    __decorate([
        core_1.Input()
    ], ClientFormComponent.prototype, "auxPase1");
    __decorate([
        core_1.Input()
    ], ClientFormComponent.prototype, "renderValue");
    __decorate([
        core_1.Input()
    ], ClientFormComponent.prototype, "modelo");
    __decorate([
        core_1.Output()
    ], ClientFormComponent.prototype, "submit");
    ClientFormComponent = __decorate([
        core_1.Component({
            selector: 'app-client-form',
            templateUrl: './client-form.component.html',
            styleUrls: ['./client-form.component.scss']
        })
    ], ClientFormComponent);
    return ClientFormComponent;
}());
exports.ClientFormComponent = ClientFormComponent;
