import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.reducers';
import { Store, select } from '@ngrx/store';
import { filtroSelect, FiltroTareas, aplicarFiltro } from '../store/filtro.actions';
import { eliminarTareasCompletadas } from '../store/tareas.actions';
import { selectFiltroTareas, selectSizeFiltroTareas } from '../store/tareas.reducer';

@Component({
  selector: 'app-tarea-footer',
  templateUrl: './tarea-footer.component.html',
  styles: []
})
export class TareaFooterComponent implements OnInit {

  filtros: FiltroTareas[] = [FiltroTareas.completados, FiltroTareas.pendientes, FiltroTareas.todos];
  filtroActual: FiltroTareas;
  sizeTareas$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(filtroSelect)).subscribe(filtro => {
      console.log(filtro);
      this.filtroActual = filtro;
    });
    this.sizeTareas$ = this.store.pipe(select(selectSizeFiltroTareas));
  }

  cambiarFiltro(filtro: FiltroTareas) {
    this.store.dispatch(aplicarFiltro({ tipo: filtro }));
  }

  eliminarTareasCompletadas() {
    this.store.dispatch(eliminarTareasCompletadas());
  }

}
