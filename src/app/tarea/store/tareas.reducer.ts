import { createReducer, on, select, createSelector } from '@ngrx/store';
import * as  tareas from './tareas.actions';
import { Tarea } from './tarea.model';
import { AppState } from './app.reducers';
import { selectFiltro, FiltroTareas } from './filtro.actions';


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

    on(tareas.eliminarTareasCompletadas, (state) => state.filter(tarea => {
        if (tarea.completado === false) {
            return tarea;
        }
    })),

);

export function tareasReducer(state: Tarea[], action): Tarea[] {
    return reducer(state, action);
}


/*SELECT */
const tareasSelect = (state) => state.tareas;

export const selectTareas = createSelector(
    tareasSelect,
    (state: Tarea[]) => state);

export const selectFiltroTareas = createSelector(
    selectFiltro,
    selectTareas,
    (filtro, tareasArray) => {
        if (filtro && tareasArray) {
            if (filtro === FiltroTareas.completados) {
                return tareasArray.filter(tarea => tarea.completado);
            } else if (filtro === FiltroTareas.pendientes) {
                return tareasArray.filter(tarea => !tarea.completado);
            } else {
                return tareasArray;
            }
        } else {
            return tareasArray;
        }
    }
);


export const selectSizeFiltroTareas = createSelector(
    selectFiltroTareas,
    (tareasFiltro) => {
        if (tareasFiltro) {
             return tareasFiltro.length;
        } else {
            return 0;
        }
    }
);
