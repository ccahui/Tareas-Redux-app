import { createReducer, on, select, createSelector } from '@ngrx/store';
import * as  filtro from './filtro.actions';

const initialState: filtro.FiltroTareas = filtro.FiltroTareas.todos;

const reducer = createReducer(initialState,
    on(filtro.aplicarFiltro, (state, { tipo }) => tipo),
);
export function filtroReducer(state, action) {
    return reducer(state, action);
}
