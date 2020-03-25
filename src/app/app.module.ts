import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { RadarComponent } from './radar/radar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    BarComponent,
    PieComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
