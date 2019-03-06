import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFzNzeSWbCZIMaIVAyjKnNReAC2GbGoTc'
    }),
  ],
  exports: [
    FormsModule,
    AgmCoreModule
  ],
  declarations: []
})
export class SharedModule { }
