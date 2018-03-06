import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// FontAwesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Services
import { TaskService } from '../service/task.service';

// Component
import { AppComponent } from './app.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { TaskComponent } from './task/task.component';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { NewTaskComponent } from './new-task/new-task.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    FilterPipe,
    SearchTaskComponent,
    TaskComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
