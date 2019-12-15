import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../store/tarea.model';

@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styles: []
})
export class TareaItemComponent implements OnInit {

  @Input() tarea: Tarea;
  constructor() { }

  ngOnInit() {
    console.log(this.tarea.descripcion);
  }

}
