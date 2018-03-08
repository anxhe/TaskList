import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';

import { ListTaskComponent } from './list-task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { AdminTaskComponent } from '../admin-task/admin-task.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { TaskService } from '../../service/task.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';



describe('ListTaskComponent', () => {
  let component: ListTaskComponent;
  let fixture: ComponentFixture<ListTaskComponent>;
  let tasks: Array<object>;

  beforeEach(async(() => {
    const taskService = jasmine.createSpyObj('TaskService', ['getTasks']);
    tasks = [
      { title: 'Foo', completed: false, id: 1 },
    ];
    const getTasksSpy = taskService.getTasks.and.returnValue(of(tasks));

    TestBed.configureTestingModule({
      declarations: [
        NewTaskComponent,
        FilterPipe,
        ListTaskComponent,
        AdminTaskComponent,
      ],
      imports: [ AngularFontAwesomeModule, FormsModule ],
      providers: [
        { provide: TaskService, useValue: taskService }
      ]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('lists tasks', () => {
    expect(component.tasks).toEqual(tasks);
  });

  it('#addNewTask() add new task inside tasks', () => {
    expect(component.tasks.length).toEqual(1);
    component.addNewTask('new task');
    expect(component.tasks.length).toEqual(2);
  });

  it('#removeTask() remove task inside tasks', () => {
    expect(component.tasks.length).toEqual(1);
    component.removeTask(component.tasks[0].id);
    expect(component.tasks.length).toEqual(0);
  });
});
