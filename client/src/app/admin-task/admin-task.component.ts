import { Component, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-task',
  templateUrl: './admin-task.component.html',
  styleUrls: ['./admin-task.component.scss']
})

export class AdminTaskComponent {

  @Input() task: object;
  @Output() ontaskDelete = new EventEmitter<number>();

  constructor () {}

  onDelete(task) {
    this.ontaskDelete.emit(task);
  }

  onCheck(task) {
    task.completed = !task.completed;
  }
}
