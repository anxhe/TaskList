import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/RX';
import 'rxjs/add/operator/map';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


const BASEURL = 'https://jsonplaceholder.typicode.com';

export interface Task {
  id?: string;
  title: string;
  completed: boolean;
}

@Injectable()

export class TaskService {

  private tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;

  constructor(private http: Http, private afs:  AngularFirestore) {
    this.tasksCollection = afs.collection<Task>('tasks');
    this.tasks = this.tasksCollection.valueChanges();
  }

  getTasks(): Observable<any> {
    return this.tasks;
  }

  saveTask(task: Task) {
    const id = this.afs.createId();
    task.id = id;
    this.tasksCollection.doc(id).set(task);
  }

}
