import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardModule } from './modules/board/board.module';
import { GridModule } from './modules/grid/grid.module';
import {WorkodersDisplayModule} from './modules/workorders-display/workorders-display.module'
import {OrderInformationsModule} from './modules/order-informations/order-informations.module'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoardModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule,
    WorkodersDisplayModule,
    OrderInformationsModule,
  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
