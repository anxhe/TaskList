import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: string;
  @Output() ontaskDelete = new EventEmitter<number>();

  constructor() {
  }

  onDelete(task) {
    this.ontaskDelete.emit(task);
  }
}
