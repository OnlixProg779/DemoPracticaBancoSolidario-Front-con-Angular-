import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { CreateClientCommand } from '../../../models/Client/commands/create-client-command';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

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
      this.clientService
      .registerNewClient(
        client
      )
      .subscribe((result: HttpResponse<any>) => {
        if (result.status == 201) {

          this.router.navigate(['/clients/list-client']);

        }
      }, (err: HttpErrorResponse) => {
        this.auxPase1 = uuidv4();
        // console.warn(err);
      });

    }
  }
}
