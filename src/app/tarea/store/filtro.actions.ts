import { createAction, props, createSelector } from '@ngrx/store';
import { AppState } from './app.reducers';

export enum FiltroTareas {
    todos = 'Todos',
    completados = 'Completados',
    pendientes = 'Pendientes',
}

export const aplicarFiltro = createAction(
    '[FILTRO] Aplicar un nuevo FILTRO',
    props<{ tipo: FiltroTareas }>(),
)

export const filtroSelect = (state: AppState) => state.filtro;

export const selectFiltro = createSelector(
    filtroSelect,
    (state: FiltroTareas) => state);
