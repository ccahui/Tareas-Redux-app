import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectTareas } from '../store/tareas.reducer';
import { Observable } from 'rxjs';
import { Tarea } from '../store/tarea.model';

@Component({
  selector: 'app-tareas-list',
  templateUrl: './tareas-list.component.html',
  styles: []
})
export class TareasListComponent implements OnInit {

  tareas$: Observable<Tarea[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.tareas$ = this.store.pipe(select(selectTareas));
  }

}
