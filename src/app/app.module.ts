import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MdButtonModule, MdCheckboxModule, MdSelectModule, MdInputModule, MdListModule, MdToolbarModule, MdSlideToggleModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TodoServiceService } from './todo-service.service';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdListModule, MdToolbarModule, MdSlideToggleModule],
  exports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdListModule, MdToolbarModule, MdSlideToggleModule],
})
export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TodoFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
