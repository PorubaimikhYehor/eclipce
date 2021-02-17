import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridsterModule } from 'angular-gridster2';
// import {OrderInformationsModule} from '../order-informations/order-informations.module'
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    GridsterModule,
    // OrderInformationsModule,
    MatToolbarModule,
    MatIconModule,

  ],
  exports: [GridComponent]
})
export class GridModule { }
