import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePlanAhorro } from 'src/app/components/BankSchema/functions/PlanAhorro/PlanAhorroFunctions';
import { CreatePlanAhorroCommand } from 'src/app/components/BankSchema/models/Bill/commands/create-plan-ahorro-command';
import { OptionsBill } from 'src/app/components/BankSchema/models/Bill/options-bill';
import { BillService } from 'src/app/components/BankSchema/services/bill.service';
import { ClientVm } from 'src/app/components/ClientSchema/models/Client/queries/client-vm';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form-create-cuenta-ahorro',
  templateUrl: './form-create-cuenta-ahorro.component.html',
  styleUrls: ['./form-create-cuenta-ahorro.component.scss']
})
export class FormCreateCuentaAhorroComponent implements OnInit {

  auxPase1 = uuidv4();
  auxPase2;

  public optionsBill: OptionsBill = new OptionsBill();

  @Input()
  public clientDto: ClientVm;

  public ahorroCuenta: CreatePlanAhorroCommand = null;

  constructor(
    private router: Router,
    private clientService: BillService
  ) { 
    this.ahorroCuenta = new CreatePlanAhorroCommand();
  }

  ngOnInit(): void {
  }

  save(){
    this.ahorroCuenta.clientRef = this.clientDto.id;
    if (this.ahorroCuenta.clientRef && this.ahorroCuenta.montoDeAhorro > 100) {
      CreatePlanAhorro(this.ahorroCuenta, this.clientService, this.router, this.auxPase1);
    }
  }

  onChangeCompany(event){

  }

}
