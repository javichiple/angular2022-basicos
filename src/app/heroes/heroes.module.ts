/* Para crear un modulo, lo primero que tenemos que hacer es agregar el NgModule y crear el decorador, luego dentro de este decorador agregar en decorations los componenetes que vamos a cargar dentro del modulo. En Exports cargamos los componenentes que vamos a exportar para que puedan ser usados fuera del modulo y siempre importamos el CommonModule ya que este tiene un monton de funcionalidades basicas de Angular (como el ngFor y el ngIf).

Por ultimo vamos al App.module.ts y en los imports agregamos el modulo que acabamos de crear.
*/


import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule,
    ]
})

export class HeroesModule {

}