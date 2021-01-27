import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

export const optionsBase: GridsterConfig = {


};

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  options: GridsterConfig = {
    // // bgColor: '#888888',
    gridType: 'fixed',
    displayGrid: 'always',
    // setGridSize: true,
    // // disableWindowResize: true,
    // // keepFixedHeightInMobile: true,
    // // minCols: 10,
    // // minRows: 10,
    // // maxCols: 50,
    // // maxRows: 50,
    fixedColWidth: 40,
    fixedRowHeight: 40,
    margin: 0,
    // // mobileBreakpoint: 1,
    // // pushItems: false,
    // // outerMargin: true,
    outerMarginTop: 0,
    outerMarginBottom: 0,
    outerMarginLeft: 0,
    outerMarginRight: 0,
    // swap: true,
    swapWhileDragging:true,
    draggable: {
      delayStart: 0,
      enabled: true,
      dropOverItems: false,
    },
    resizable: {
      enabled: true,
    }
  };
  dashboard: Array<GridsterItem> = [];

  static itemChange(item: GridsterItem, itemComponent: GridsterItem) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: GridsterItem) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    console.log(this.options);

    // this.options = {
      // itemChangeCallback: GridComponent.itemChange,
      // itemResizeCallback: GridComponent.itemResize,
    // };

    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 1, y: 1, x: 2 },
      { cols: 2, rows: 1, y: 2, x: 3 },
      { cols: 2, rows: 1, y: 3, x: 4 },
      { cols: 2, rows: 1, y: 4, x: 5 },
    ];
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
}
