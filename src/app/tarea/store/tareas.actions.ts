import { createAction, props } from '@ngrx/store';
import { Tarea } from './tarea.model';


export const agregarTarea = createAction(
    '[TAREA] Nueva Tarea',
    props<{ tarea: Tarea }>(),
);

export const cambiarStadoTarea = createAction(
    '[TAREA] Cambiar el estado de una tarea',
    props<{ idTarea: number, estado: boolean }>(),
);

export const cambiarEstadoTareas = createAction(
    '[TAREA] Cambiar todos los estados de las tareas',
    props<{ estado: boolean }>(),
);

export const cambiarDescripcionTarea = createAction(
    '[TAREA] Cambiar decripcion de una tarea',
    props<{ idTarea: number, descripcionTarea: string }>(),
);

export const eliminarTarea = createAction(
    '[TAREA] Eliminar una tarea',
    props<{ idTarea: number }>(),
);

export const eliminarTareasCompletadas = createAction(
    '[TAREA] Eliminar tareas completadas'
);
