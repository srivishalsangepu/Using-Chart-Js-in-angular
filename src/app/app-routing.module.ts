import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { RadarComponent } from './radar/radar.component';


const routes: Routes = [
  // {path:'', component:LineComponent},
  // {path:'line', component:LineComponent},
  // {path:'bar', component:BarComponent},
  // {path:'pie', component:PieComponent},
  // {path:'radar', component:RadarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
