import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { GridModule } from '../grid/grid.module';
// import { GridModule } from '../grid/grid.module';



@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    GridModule
  ],
  exports:[BoardComponent]
})
export class BoardModule { }
