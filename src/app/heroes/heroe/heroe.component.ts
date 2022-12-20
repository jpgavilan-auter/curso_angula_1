import { Component } from '@angular/core'


@Component({
    selector : 'app-heroe',
    templateUrl : './heroe.component.html'
})
export class HeroeComponent {
    name : string = 'Iron man';
    age  : number = 45;

    getData() : string {
         return `
            ${ this.name } - ${ this.age }
         `
         }
    get upperName() : string {
        return this.name.toUpperCase();
    }

    changeName() : void {
        this.name = 'Spider man';
    }

    changeAge() : void {
        this.age = 20;
    }
}