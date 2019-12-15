import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TareaComponent } from './tarea/tarea.component';
import { TareasListComponent } from './tarea/tareas-list/tareas-list.component';
import { TareaItemComponent } from './tarea/tarea-item/tarea-item.component';
import { TareaFooterComponent } from './tarea/tarea-footer/tarea-footer.component';
import { TareaAgregarComponent } from './tarea/tarea-agregar/tarea-agregar.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { tareasReducer} from './tarea/store/tareas.reducer';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TareaComponent,
    TareasListComponent,
    TareaItemComponent,
    TareaFooterComponent,
    TareaAgregarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({tareas: tareasReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
