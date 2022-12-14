import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { BankAccountDto } from 'src/app/components/setting/models/BankAccounts/bank-account-dto';

@Component({
  selector: 'app-card-bank-account',
  templateUrl: './card-bank-account.component.html',
  styleUrls: ['./card-bank-account.component.scss']
})
export class CardBankAccountComponent implements OnInit {

  @Input()
  bankSelected: any;
  @Input()
  title: string;

  @Output()
  address: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
