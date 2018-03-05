import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../service/task.service';

import { AppComponent } from './app.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchTaskComponent } from './search-task/search-task.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    FilterPipe,
    SearchTaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
