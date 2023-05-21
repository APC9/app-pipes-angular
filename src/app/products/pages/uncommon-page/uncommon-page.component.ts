import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Alberto';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name= 'Mercy'
    this.gender = 'female'
  }

  // i18plural
  public clients : string[] = ['Maria', 'Juan', 'Pedro', 'Jesus', 'David', 'Melissa', 'Ana']
  public clientsMaps = {
    '=0': 'No tenemos Clientes esperando',
    '=1': 'tenemos un Cliente esperando',
    'other': 'tenemos # Cliente esperando',
  }

  deleteClient():void{
    this.clients.shift()
  }

  // keyValue andd JSONpipe
  public person ={
    name: 'Alberto',
    age: 31,
    address: 'Estepona; España'
  }

  // async pipe
  public myObservableTimer:Observable<number> = interval(2000)

  public promiseValue:Promise<string> = new Promise( (resolve, reject) =>{
    setTimeout( ()=>{
      resolve('tenemos data en la promesa')
    }, 3500)
  })




  // solo es codigo para el html

  public codeSnippet2: string = `
  // HTML

  p>
    Actualmente {{clients.length | i18nPlural:clientsMaps }}
  /p>

  // component.ts

  --> i18plural

  public clients : string[] = ['Maria', 'Juan', 'Pedro', 'Jesus', 'David', 'Melissa', 'Ana']

  public clientsMaps = {
    '=0': 'No tenemos Clientes esperando',
    '=1': 'tenemos un Cliente esperando',
    'other': 'tenemos # Clientes esperando',
  }

  deleteClient():void{
    this.clients.shift()
  }

  `

  public codeSnippet: string = `

    // HTML

    p>
    Saludos {{name}},
    es un placer
    {{ gender| i18nSelect:invitationMap }}
    a nuestro evento.
    /p>

    // component.ts

    --> i18n Select

    public name: string = 'Alberto';

    public gender: 'male' | 'female' = 'male';

    public invitationMap = {
      male: 'invitarlo',
      female: 'invitarla'
    }

    changeClient():void{
      this.name= 'Mercy'
      this.gender = 'female'
    }
  `
}
