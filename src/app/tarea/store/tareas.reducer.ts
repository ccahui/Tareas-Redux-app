import { createReducer, on, select, createSelector } from '@ngrx/store';
import * as  tareas from './tareas.actions';
import { Tarea } from './tarea.model';


export interface AppState {
    tareas: Tarea[];
}

const initialState = [new Tarea('Aprender Angular'), new Tarea('Aprender Redux')];

const reducer = createReducer(initialState,
    on(tareas.agregarTarea, (state, { tarea }) => [...state, {...tarea}]),
);

export function tareasReducer(state, action) {
    return reducer(state, action);
}

export const tareasSelect = (state: AppState) => state.tareas;
export const selectTareas = createSelector(
    tareasSelect,
    (state: Tarea[]) => state);
