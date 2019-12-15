import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../store/tareas.reducer';
import { Store } from '@ngrx/store';
import { Tarea } from '../store/tarea.model';
import { agregarTarea } from '../store/tareas.actions';

@Component({
  selector: 'app-tarea-agregar',
  templateUrl: './tarea-agregar.component.html',
  styles: []
})
export class TareaAgregarComponent implements OnInit {

  descripcion: FormControl;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.descripcion = new FormControl('', Validators.required);
  }
  agregarTarea() {
    if (this.descripcion.invalid) {
      return;
    }
    const nuevaTarea = new Tarea(this.descripcion.value);
    this.store.dispatch(agregarTarea({ tarea: nuevaTarea }));
    this.resetFormulario();

  }
  resetFormulario() {
    this.descripcion.setValue('');
  }

}
