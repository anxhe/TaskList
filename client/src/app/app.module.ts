import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// FontAwesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Services
import { TaskService } from '../service/task.service';

// Component
import { AppComponent } from './app.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { AdminTaskComponent } from './admin-task/admin-task.component';
import { NewTaskComponent } from './new-task/new-task.component';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    FilterPipe,
    SearchTaskComponent,
    AdminTaskComponent,
    NewTaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFontAwesomeModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase , 'TaskList')
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
