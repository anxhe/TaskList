import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';

import { AppComponent } from './app.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { AdminTaskComponent } from './admin-task/admin-task.component';

import { FilterPipe } from './pipes/filter.pipe';

import { TaskService } from '../service/task.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';


describe('AppComponent', () => {

  let tasks: Array<object>;

  beforeEach(async(() => {
    const taskService = jasmine.createSpyObj('TaskService', ['getTasks']);
    tasks = [
      { title: 'Foo', completed: false, id: 1 },
    ];
    const getTasksSpy = taskService.getTasks.and.returnValue(of(tasks));

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchTaskComponent,
        ListTaskComponent,
        NewTaskComponent,
        FilterPipe,
        AdminTaskComponent
      ],
      imports: [ AngularFontAwesomeModule, FormsModule ],
      providers: [
        { provide: TaskService, useValue: taskService }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Admin Task');
  }));

  it('#updateSearchText(text) should ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const text = 'fo..';

    expect(app.search).toBe('');
    app.updateSearchText(text);
    expect(app.search).toBe(text);
  });
});
