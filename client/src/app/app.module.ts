import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaskService } from '../service/task.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
