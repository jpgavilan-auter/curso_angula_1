import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="dif(base)"> + {{base}} </button>

        <span [ngStyle]="{color:textColor}" > {{ numero }} </span>

        <button (click)="dif(-base)"> - {{base}} </button>

    `
})
export class ContadorComponent {
    base   : number = 5;
    titulo : string = 'Contador App';
    numero : number = 0;
    color  : string = 'black';
  
    get textColor() : string {
      if(this.numero >= 0){
        this.color = 'black';
      }else{
        this.color = 'red';
      }
      return this.color;
    }
  
    plus() {
      this.numero +=1;
    }
  
    minus() {
      this.numero -=1;
    }
  
    dif(value:number){
      this.numero += value;
    }
}