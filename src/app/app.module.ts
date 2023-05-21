import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Configuracion del idioma de la fecha
import localEsVE from '@angular/common/locales/es-VE';
import localFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

registerLocaleData(localEsVE);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
   /*  {
      // Establece el idioma de las fechas por defecto
      provide: LOCALE_ID, useValue: 'es-VE'
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
