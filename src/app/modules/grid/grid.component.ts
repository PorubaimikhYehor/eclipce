import { Component, Input, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { BoardItem } from '../board/models/boardItem.model';

export const optionsBase: GridsterConfig = {


};

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() dashboard: BoardItem[] = [];
  @Input() options: GridsterConfig = {};
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();

  gridSize: { [key: string]: string } = {}


  optionsResult: GridsterConfig = {
    fixedColWidth: 20,
    fixedRowHeight: 40,
    pushItems: true,
    displayGrid: 'none',
    disableScrollHorizontal: true,
    disableScrollVertical:true,
    margin: 0,
    mobileBreakpoint: 1,
    outerMarginTop: 0,
    outerMarginBottom: 0,
    outerMarginLeft: 0,
    outerMarginRight: 0,
    pushDirections: {north: false, east: true, south: false, west:true},
    // maxItemRows:1000,
    draggable: {
      enabled: true,
      dropOverItems: true,
    },
    resizable: {
      enabled: true,
      handles: {s: false, e: true, n: false, w: true, se: false, ne:false, sw: false, nw: false},
    },
  };

  static itemChange(item: GridsterItem, itemComponent: GridsterItem) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: GridsterItem) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.optionsResult.minCols = this.optionsResult.maxCols = (this.endDate.valueOf() - this.startDate.valueOf()) * 2 / 3600000;
    this.optionsResult.minRows = this.optionsResult.maxRows = this.dashboard.map(i => i.productionLine).filter((value, index, self) => self.indexOf(value) === index).length;
    console.log(this.dashboard.map(i => i.productionLine).filter((value, index, self) => self.indexOf(value) === index));
    
    this.gridSize = this.calcWidthHeight(this.optionsResult);
    


    // console.log(this.options);

    // this.options = {
    // itemChangeCallback: GridComponent.itemChange,
    // itemResizeCallback: GridComponent.itemResize,
    // };

    // this.dashboard = <BoardItem[]>[
    //   { cols: 100, rows: 1, y: 0, x: 0 },
    //   // { cols: 2, rows: 1, y: 1, x: 2 },
    //   // { cols: 2, rows: 1, y: 2, x: 3 },
    //   // { cols: 2, rows: 1, y: 3, x: 4 },
    //   // { cols: 2, rows: 1, y: 4, x: 5 },
    // ];
  }



  changedOptions() {
    // this.options.api.optionsChanged();
  }

  removeItem(item: GridComponent) {
    // this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    // this.dashboard.push({});
  }

  calcWidthHeight(opt: GridsterConfig): { [key: string]: string } {
    const result = { width: '', height: '' }
    const {
      fixedColWidth,
      fixedRowHeight,
      outerMarginLeft,
      outerMarginRight,
      outerMarginTop,
      outerMarginBottom,
      minCols,
      minRows
    } = opt;
    result['width'] = ((fixedColWidth || 0) * (minCols || 0) + (outerMarginLeft || 0) + (outerMarginRight || 0)) + 'px';
    result['height'] = ((fixedRowHeight || 0) * (minRows || 0) + (outerMarginTop || 0) + (outerMarginBottom || 0)) + 'px';
    return result;
  }

}
