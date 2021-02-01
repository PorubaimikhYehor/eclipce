import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { GridModule } from '../grid/grid.module';
import { ButtonTogglesComponent } from './components/button-toggles/button-toggles.component';
import { TimeSelectorComponent } from './components/time-selector/time-selector.component';
// import { GridModule } from '../grid/grid.module';



@NgModule({
  declarations: [BoardComponent, ButtonTogglesComponent, TimeSelectorComponent],
  imports: [
    CommonModule,
    GridModule
  ],
  exports:[BoardComponent]
})
export class BoardModule { }
