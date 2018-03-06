import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  @Output() ontask = new EventEmitter<string>();
  task: '';

  constructor() {
  }

  addTask(taskTitle) {
    this.ontask.emit(taskTitle);
    this.task = '';
  }
}
