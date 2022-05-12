import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserFormComponent } from './user-page/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersArrayComponent } from './users-array/users-array.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserFormComponent,
    UsersArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
