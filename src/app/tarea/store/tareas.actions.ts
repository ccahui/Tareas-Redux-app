import { createAction, props } from '@ngrx/store';
import { Tarea } from './tarea.model';

export const agregarTarea = createAction(
    '[TAREA] Nueva Tarea',
    props<{ tarea: Tarea }>(),
);
