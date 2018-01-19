import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public estudiantes: Estudiante[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        console.info(baseUrl);
        http.get(baseUrl + 'api/Estudiante/listado').subscribe(result => {
            this.estudiantes = result.json() as Estudiante[];
        }, error => console.error(error));
    }
}

interface Estudiante {
    nombre: string;
    apellido: number;
    credito: number;
    beca: boolean;
    tipopago: string;
}
