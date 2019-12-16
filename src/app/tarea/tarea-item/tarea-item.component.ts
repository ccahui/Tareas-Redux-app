import { Component, OnInit, Input, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Tarea } from '../store/tarea.model';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { cambiarStadoTarea, cambiarDescripcionTarea, eliminarTarea } from '../store/tareas.actions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styles: []
})
export class TareaItemComponent implements OnInit, OnDestroy {

  @Input() tarea: Tarea;
  editando: boolean;

  descripcion: FormControl;
  check: FormControl;
  subscribe = new Subscription();

  @ViewChild('txtInput', {
    static: true
  }) descripcionDom: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.editando = false;
    this.descripcion = new FormControl(this.tarea.descripcion, Validators.required);
    this.check = new FormControl(this.tarea.completado);
    
    this.subscribe = this.check.valueChanges.subscribe(valorCheckBox => {
      this.store.dispatch(cambiarStadoTarea({ estado: valorCheckBox, idTarea: this.tarea.id }));
    });
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
  editar() {
    this.editando = true;
    setTimeout(() => {
      this.descripcionDom.nativeElement.select();
    }, 100);
  }
  terminarEdicion() {
    this.editando = false;

    if (this.descripcion.invalid) {
      return;
    }
    if (this.descripcion.value === this.tarea.descripcion) {
      return;
    }

    this.store.dispatch(cambiarDescripcionTarea({ idTarea: this.tarea.id, descripcionTarea: this.descripcion.value }));

  }

  eliminarTarea(){
    this.store.dispatch(eliminarTarea({idTarea: this.tarea.id}));
  }



}
