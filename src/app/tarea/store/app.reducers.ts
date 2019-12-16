import { Tarea } from './tarea.model';
import { FiltroTareas } from './filtro.actions';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTareas from './tareas.reducer';
import * as fromFiltro from './filtro.reducer';

export interface AppState {
    tareas: Tarea[];
    filtro: FiltroTareas;
}

export const appReducers: ActionReducerMap<AppState> = {
    tareas: fromTareas.tareasReducer,
    filtro: fromFiltro.filtroReducer,
}

