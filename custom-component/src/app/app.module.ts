import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestElementComponent } from './components/test-element/test-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputElementComponent } from './components/input-element/input-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    TestElementComponent,
    InputElementComponent,
    ChipListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
