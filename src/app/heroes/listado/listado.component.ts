import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes : string[] = ['Spider man','Iron man','Hulk',
  'Capitán América','Thor','Doctor Strange'];
  borrado : string = '';
  dropHero(){
    this.borrado = this.heroes.shift() || '';

  }

}
