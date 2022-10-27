import { HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CreatePlanAhorro } from 'src/app/components/BankSchema/functions/PlanAhorro/PlanAhorroFunctions';
import { CreatePlanAhorroCommand } from 'src/app/components/BankSchema/models/Bill/commands/create-plan-ahorro-command';
import { OptionsBill } from 'src/app/components/BankSchema/models/Bill/options-bill';
import { TiempoPlanDeAhorroVm } from 'src/app/components/BankSchema/models/TypeBill/queries/tiempo-plan-de-ahorro-vm';
import { BillService } from 'src/app/components/BankSchema/services/bill.service';
import { TypeBillService } from 'src/app/components/BankSchema/services/type-bill.service';
import { ClientVm } from 'src/app/components/ClientSchema/models/Client/queries/client-vm';
import { ClientService } from 'src/app/components/ClientSchema/services/client.service';
import { v4 as uuidv4 } from 'uuid';
import { InteresPorPeriodo } from '../../models/interes-por-periodo';

@Component({
  selector: 'app-form-create-cuenta-ahorro',
  templateUrl: './form-create-cuenta-ahorro.component.html',
  styleUrls: ['./form-create-cuenta-ahorro.component.scss']
})
export class FormCreateCuentaAhorroComponent implements OnInit {
  public arrayTiempoPlanDeAhorro:TiempoPlanDeAhorroVm[] = [];

  public valueSelected: TiempoPlanDeAhorroVm = null;
  filterNumber = new Subject<string>();

  auxPase1 = uuidv4();
  auxPase2;

  public optionsBill: OptionsBill = new OptionsBill();

  @Input()
  public clientDto: ClientVm;

  public ahorroCuenta: CreatePlanAhorroCommand = null;

  constructor(
    private router: Router,
    private clientService: ClientService,
    private planAhorroService: BillService,
    private tiempoPlanAhorroService: TypeBillService,
    activatedRouter: ActivatedRoute

  ) { 
    activatedRouter.params.subscribe((params) => {
      if(params.id){
        let params2: HttpParams = new HttpParams();

      clientService
        .getUniqueClient(
          params.id,
          params2
        )
        .subscribe((result: HttpResponse<any>) => {
          if (result.status == 201) {
  
            this.clientDto = result.body
  
          }
        }, (err: HttpErrorResponse) => {
          console.warn(err);
        });    
      }
      });
    this.ahorroCuenta = new CreatePlanAhorroCommand();
    this.getTiemposDePlanDeAhorro();

  }

  ngOnInit(): void {
    this.filterNumber.pipe(debounceTime(1000)).subscribe((input) => {
      console.log(input)
      if(this.ahorroCuenta.montoDeAhorro > 99 && this.valueSelected != null){
        this.calcularInteresNominal(this.ahorroCuenta.montoDeAhorro, this.valueSelected);
      }else{
        this.tablaDescriptiva = [];
      }
    });
  }

  save(){
    this.ahorroCuenta.clientRef = this.clientDto.id;
    console.log(this.ahorroCuenta)
    if (this.ahorroCuenta.clientRef && this.ahorroCuenta.montoDeAhorro > 99) {
      CreatePlanAhorro(this.ahorroCuenta, this.planAhorroService, this.router, this.auxPase1);
    }else{
      alert("No se puede ingresar un monto inferior a $100");
    }
  }

  onChangeCompany(value){
    
    var aux = this.arrayTiempoPlanDeAhorro.find(a => a.id == value);
    this.valueSelected = aux;
    if(this.ahorroCuenta.montoDeAhorro < 100){
      alert("El monto de ahorro ingresado no puede ser menor a $100");
    }else{
      this.calcularInteresNominal(this.ahorroCuenta.montoDeAhorro, this.valueSelected);
    }
  
  }

  public tablaDescriptiva: InteresPorPeriodo[];

  calcularInteresNominal(aporteMensualIn, entity:TiempoPlanDeAhorroVm){
    this.tablaDescriptiva = [];

    var aporteMensual:number = aporteMensualIn;
    var interesNominal:number = entity.tasaDeInteresAnual;
    var periodos: number = entity.meses;


    var tasaPorPeriodo = interesNominal / 12;

    var ultimoAporte: number = 0;

    for (let index = 0; index < periodos; index++) {

      var auxInteresGenerado: number = null;
      if(index == 0){
        auxInteresGenerado = aporteMensual * (tasaPorPeriodo / 100);
        ultimoAporte = aporteMensual + auxInteresGenerado
        this.tablaDescriptiva.push(new InteresPorPeriodo(
          index+1,
          aporteMensual,
          auxInteresGenerado,
          ultimoAporte
          ));
      }else{
        var aux = ultimoAporte + aporteMensual;
        auxInteresGenerado = aux * (tasaPorPeriodo / 100);
        ultimoAporte = aux + auxInteresGenerado
        this.tablaDescriptiva.push(new InteresPorPeriodo(
          index+1,
          aux,
          auxInteresGenerado,
          ultimoAporte
          ));
      }
      
    }

  }


  getTiemposDePlanDeAhorro(){
    let params: HttpParams = new HttpParams();
    this.tiempoPlanAhorroService
        .getAllTiempoPlanDeAhorro(params)
        .subscribe((result: HttpResponse<any>) => {
          if (!result) {
            return;
          }
          if (result.status == 200) {
              this.arrayTiempoPlanDeAhorro = result.body;
          }
        }, (err: HttpErrorResponse) => {
          console.warn(err);
        });
  }

}
