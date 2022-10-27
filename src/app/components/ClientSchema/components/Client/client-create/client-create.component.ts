import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { CreateClient } from '../../../functions/Client/ClientFunctions';
import { CreateClientCommand } from '../../../models/Client/commands/create-client-command';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  renderValue = 'Client Add';

  auxPase1 = uuidv4();
  auxPase2;

  constructor(
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
  }


  save(client: CreateClientCommand) {
    if (client.nombre) {
      CreateClient(client, this.clientService, this.router, this.auxPase1);
    }
  }
}
