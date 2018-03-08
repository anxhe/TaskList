import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskComponent } from './new-task.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

describe('NewTaskComponent', () => {
  let component: NewTaskComponent;
  let fixture: ComponentFixture<NewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskComponent ],
      imports: [ AngularFontAwesomeModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('addTask emits ontask event with task title', () => {
    const newTask = 'new task';
    component.ontask.subscribe(task => expect(task).toBe(newTask));
    component.addTask(newTask);
  });
});
