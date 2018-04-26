import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/RX';
import 'rxjs/add/operator/map';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


const BASEURL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class TaskService {
  constructor(private http: Http) { }

  getTasks(): Observable<any> {
    return this.http.get(`${BASEURL}/todos`)
                    .map(res => res.json());

  }
}
