import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaskComponent } from './admin-task.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';


describe('AdminTaskComponent', () => {
  let component: AdminTaskComponent;
  let fixture: ComponentFixture<AdminTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTaskComponent ],
      imports: [ AngularFontAwesomeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTaskComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onCheck(task) should toggle #task.completed', () => {
    const task = { title: 'task', completed: false };
    expect(task.completed).toBe(false);
    component.onCheck(task);
    expect(task.completed).toBe(true);
  });

  it('onDelete emits ontaskDelete event with task', () => {
    const taskDelete = { title: 'task', completed: false, id: 3 };
    component.ontaskDelete.subscribe(task => expect(task).toBe(taskDelete));
    component.onDelete(taskDelete);

  });
});
