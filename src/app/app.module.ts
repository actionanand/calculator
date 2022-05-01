import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BubblingTextDirective } from './directives/bubbling-text.directive';
import { VantaComponent } from './components/vanta/vanta.component';

@NgModule({
  declarations: [
    AppComponent,
    BubblingTextDirective,
    VantaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
