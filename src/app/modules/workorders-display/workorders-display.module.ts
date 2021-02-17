import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkordersDisplayComponent } from './workorders-display.component';


@NgModule({
  declarations: [WorkordersDisplayComponent],
  imports: [
    CommonModule,
  ],
  exports: [WorkordersDisplayComponent]
})
export class WorkodersDisplayModule { }
