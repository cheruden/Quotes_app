import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { FormComponent } from './quote-form/quote-form.component';
import { DetailsComponent } from './details/details.component';
import { QuoteComponent } from './quote/quote.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailsComponent,
    QuoteComponent,
    // GoalFormComponent,
    // QuiteFormComponent,
    // QuoteFormComponent,
    // HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }