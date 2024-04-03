import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

import { AppComponent } from './app.component';
import { PostfixEvaluatorComponent } from './postfix-evaluator/postfix-evaluator.component';

@NgModule({
  declarations: [
    AppComponent,
    PostfixEvaluatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Include FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
