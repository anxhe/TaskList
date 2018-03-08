import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTaskComponent } from './search-task.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

describe('SearchTaskComponent', () => {
  let component: SearchTaskComponent;
  let fixture: ComponentFixture<SearchTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTaskComponent ],
      imports: [ AngularFontAwesomeModule, FormsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('notifies input on search box', () => {
    const searchText = 'foo';
    component.onsearch.subscribe(searched => expect(searched).toBe(searchText));
    component.notifyChange(searchText);
  });
});
