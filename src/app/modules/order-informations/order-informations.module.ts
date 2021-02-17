import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderInformationsComponent } from './order-informations.component';
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";


@NgModule({
  declarations: [OrderInformationsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatTooltipModule,
    MatIconModule,
  ],
  exports: [
    OrderInformationsComponent,
    MatIconModule,

  ]
})
export class OrderInformationsModule { 


}
