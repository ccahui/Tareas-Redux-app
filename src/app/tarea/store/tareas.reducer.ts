import { createReducer, on, select, createSelector } from '@ngrx/store';
import * as  tareas from './tareas.actions';
import { Tarea } from './tarea.model';


const initialState: Tarea[] = [new Tarea('Aprender Angular'), new Tarea('Aprender Redux')];

const reducer = createReducer(initialState,
    on(tareas.agregarTarea, (state, { tarea }) => [...state, { ...tarea }]),
    on(tareas.cambiarStadoTarea, (state, { idTarea, estado }) => state.map(tarea => {
        if (tarea.id === idTarea) {
            return { ...tarea, completado: estado };
        }
        return tarea;
    })),
    on(tareas.cambiarDescripcionTarea, (state, { idTarea, descripcionTarea }) => state.map(tarea => {
        if (tarea.id === idTarea) {
            return { ...tarea, descripcion: descripcionTarea };
        }
        return tarea;
    })),
    on(tareas.eliminarTarea, (state, { idTarea }) => state.filter(tarea => {
        if (tarea.id !== idTarea) {
            return tarea;
        }
    })),
    on(tareas.cambiarEstadoTareas, (state, { estado }) => state.map(tarea => {
        return { ...tarea, completado: estado };
    })),

);

export function tareasReducer(state: Tarea[], action): Tarea[] {
    return reducer(state, action);
}

export const tareasSelect = (state) => state.tareas;

export const selectTareas = createSelector(
    tareasSelect,
    (state: Tarea[]) => state);
