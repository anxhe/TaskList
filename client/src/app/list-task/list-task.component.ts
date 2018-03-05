import { Component, Input } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent {

  @Input() search: string;

  tasks: Array<any> = [];

  constructor(public taskService: TaskService) {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}
