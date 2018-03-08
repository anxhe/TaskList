import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss']
})
export class SearchTaskComponent {

  @Output() onsearch = new EventEmitter<string>();

  notifyChange(text) {
    this.onsearch.emit(text);
  }

}
