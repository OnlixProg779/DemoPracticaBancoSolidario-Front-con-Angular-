import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsFormsService } from 'src/app/shared/service/validators-forms.service';
import { CreateClientCommand } from '../../../models/Client/commands/create-client-command';
import { ClientVm } from '../../../models/Client/queries/client-vm';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  @Input()
  auxPase1;
  auxPase2;

  public accountForm: FormGroup;

  @Input()
  renderValue: string;

  @Input()
  modelo: ClientVm;

  @Output()
  submit: EventEmitter<CreateClientCommand> = new EventEmitter<CreateClientCommand>();

  clientSentCreateDto: CreateClientCommand;

  constructor(
    private formBuilder: FormBuilder,
    public validatorService: ValidatorsFormsService
  ) {

  }

  ngOnInit() {
    this.createAccountForm();

    // Para el uptade
    if (this.modelo !== undefined) {
      console.log(this.modelo)
      this.accountForm.patchValue(this.modelo);
    }
  }


  createAccountForm() {
    this.accountForm = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      apellidos: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      instagram: [''],
      city: ['',
      {
        validators: [Validators.required],
      },
    ],
      email: [''],
      phone: [''],
    });
  }

  save() {
    if (this.accountForm.valid) {
      var aux: CreateClientCommand = this.accountForm.value;

      if (this.auxPase1 !== this.auxPase2) {
        this.clientSentCreateDto = aux;
        this.auxPase2 = this.auxPase1;
        this.submit.emit(this.clientSentCreateDto);
      }
    }else{
      this.accountForm.markAllAsTouched();
      console.log('FORM NOT VALID');
      return;
    }
  }

}
