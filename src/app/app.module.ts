import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';
import { CirculosComponent } from './components/circulos/circulos.component';
import { RadarComponent } from './components/radar/radar.component';
import { QuesitosComponent } from './components/quesitos/quesitos.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarrasComponent,
    CirculosComponent,
    RadarComponent,
    QuesitosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
