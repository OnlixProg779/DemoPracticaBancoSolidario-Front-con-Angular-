// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiURLMicroserviceClient: 'https://localhost:7290', // servicio 1
  apiURLMicroserviceNuevaCuentaAhorro: 'https://localhost:7073',// servicio 2

  mediaTypes: {
    client: {
      getAll: {
        accept: {
          getAllclientJson: 'application/vnd.bncoSolidario.client.full+json',
          getAllclientXml: 'application/vnd.bncoSolidario.client.full+xml',
        }
      },
      getUnique: {
        accept: {
          getClientJson: 'application/vnd.bncoSolidario.client.full+json',
          getClientXml: 'application/vnd.bncoSolidario.client.full+xml',
        }
      },
      post: {
        ContentType: {
          postJson: 'application/vnd.bncoSolidario.CreateClient+json',
        }
      },
      changeActivators: {
        ContentType: {
          putJson: 'application/vnd.bncoSolidario.ChangeActivator+json',
        }
      },
    },
    planAhorro: {
      getAll: {
        accept: {
          getAllclientJson: 'application/vnd.bncoSolidario.planAhorro.full+json',
          getAllclientXml: 'application/vnd.bncoSolidario.planAhorro.full+xml',
        }
      },
      getUnique: {
        accept: {
          getClientJson: 'application/vnd.bncoSolidario.planAhorro.full+json',
          getClientXml: 'application/vnd.bncoSolidario.planAhorro.full+xml',
        }
      },
      post: {
        ContentType: {
          postJson: 'application/vnd.bncoSolidario.CreatePlanAhorro+json',
        }
      },
      changeActivators: {
        ContentType: {
          putJson: 'application/vnd.bncoSolidario.ChangeActivator+json',
        }
      },
    },
    tiempoPlanDeAhorro: {
      getAll: {
        accept: {
          getAllclientJson: 'application/vnd.bncoSolidario.client.full+json',
          getAllclientXml: 'application/vnd.bncoSolidario.client.full+xml',
        }
      },
      getUnique: {
        accept: {
          getClientJson: 'application/vnd.bncoSolidario.client.full+json',
          getClientXml: 'application/vnd.bncoSolidario.client.full+xml',
        }
      },
      post: {
        ContentType: {
          postJson: 'application/vnd.bncoSolidario.CreateTiempoPlanDeAhorro+json',
        }
      },
      changeActivators: {
        ContentType: {
          putJson: 'application/vnd.bncoSolidario.ChangeActivator+json',
        }
      },
    },
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
