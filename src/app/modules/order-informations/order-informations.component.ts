import { Component, OnChanges , Input, Output, EventEmitter } from '@angular/core';
import { BoardItem } from '../board/models/boardItem.model';

@Component({
  selector: 'app-order-informations',
  templateUrl: './order-informations.component.html',
  styleUrls: ['./order-informations.component.scss']
})
export class OrderInformationsComponent implements OnChanges {
  @Input() order: BoardItem | undefined | null; 

  @Output() clickButtonHide= new EventEmitter()
  orderInfos: BoardItem | undefined | null; 

  constructor() { }

  ngOnChanges(): void {
  }

  closeInfos() {
    // this.order=null
    this.clickButtonHide.emit();
  }

}
