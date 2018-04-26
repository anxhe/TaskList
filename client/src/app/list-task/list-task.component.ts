import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  @Input() search: string;

  tasks: Array<object> = [];

  constructor(public taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  removeTask(task) {
    this.taskService.deleteTask(task);
  }

  addNewTask(taskTitle: string) {
    this.taskService.saveTask({
      title: taskTitle,
      completed: false
    });
  }

}
