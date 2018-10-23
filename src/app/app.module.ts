import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MockItemsService } from './_services/mock-items.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    MockItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
