import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BunnyComponent } from './bunny/bunny.component';
import { PuppyComponent } from './puppy/puppy.component';

@NgModule({
  declarations: [
    AppComponent,
    BunnyComponent,
    PuppyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
