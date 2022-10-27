import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetSettingsService } from 'src/app/shared/service/get-settings.service';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { GetClients } from '../../ClientSchema/functions/Client/ClientFunctions';
import { OptionsClient } from '../../ClientSchema/models/Client/options-client';
import { ClientService } from '../../ClientSchema/services/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public optionsClient: OptionsClient = null;
  public clientId: string = "";

  constructor(
    private clientService: ClientService,
    private utilsService:UtilsService,
    private getSettingsService: GetSettingsService,
    private router: Router
  ) {
    this.optionsClient = new OptionsClient();
   }

  ngOnInit(): void {
    this.getSettingsService.settingsClients(this.optionsClient.showPerPage, "dashboard", this.router).subscribe((result:Object) => {
      this.optionsClient.settings = result;
    },(err => {
      console.warn(err);
    }));
    GetClients(this.clientService,this.optionsClient, this.utilsService);
  }

}
