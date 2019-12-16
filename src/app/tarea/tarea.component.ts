import { Component, OnInit } from '@angular/core';
import { Tarea } from './store/tarea.model';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducers';
import { cambiarEstadoTareas } from './store/tareas.actions';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styles: []
})
export class TareaComponent implements OnInit {

  completado: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.completado = false;
  }

  completarTareas() {
    this.completado = !this.completado;
    this.store.dispatch(cambiarEstadoTareas({estado: this.completado}));
  }

}
