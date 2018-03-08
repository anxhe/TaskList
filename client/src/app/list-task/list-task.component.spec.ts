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
  const tasks = [
    { title: 'Foo', completed: false, id: 1 },
  ];

  beforeEach(async(() => {
    const taskService = jasmine.createSpyObj('TaskService', ['getTasks']);
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
});
