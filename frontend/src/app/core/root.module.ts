import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { WebRequestService } from './../services/web-request.service';
import { TaskService } from './../services/task.service';

import { RootComponent } from './components/root.component';
import { NotFoundComponent } from './../pages/not-found/not-found.component';
import { ListsViewComponent } from './../pages/lists-view/lists-view.component';
import { NewListComponent } from './../pages/new-list/new-list.component';
import { NewTaskComponent } from './../pages/new-task/new-task.component';


@NgModule({
  declarations: [
    RootComponent,
    NotFoundComponent,
    ListsViewComponent,
    NewListComponent,
    NewTaskComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    WebRequestService,
    TaskService
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
