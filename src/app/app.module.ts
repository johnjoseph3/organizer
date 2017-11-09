import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { GoalsService } from './goals.service';

import { AppComponent } from './app.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { NewGoalComponent } from './new-goal/new-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsListComponent,
    NewGoalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GoalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
