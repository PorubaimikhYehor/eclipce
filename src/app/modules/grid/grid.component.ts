// import { stringify } from '@angular/compiler/src/util';
// import { Component, ElementRef, Input, OnChanges, OnInit, Output, ViewChild , EventEmitter} from '@angular/core';
// import { GridsterConfig, GridsterItem } from 'angular-gridster2';
// import { BoardItem } from '../board/models/boardItem.model';

// const gridCOnfig = {
//   rowHeight: 40,
//   colDiv: 2,

// }

// class Hour {
//   val: string;
//   posX: string;
//   constructor(opt?: { val: string, posX: string }) {
//     this.val = opt?.val || "0:00";
//     this.posX = opt?.posX || "0";
//   }
// }

// export const optionsBase: GridsterConfig = {


// };

// @Component({
//   selector: 'app-grid',
//   templateUrl: './grid.component.html',
//   styleUrls: ['./grid.component.scss']
// })
// export class GridComponent implements OnChanges, OnInit {
//   @Input() dashboard: BoardItem[] = [];
//   @Input() options: GridsterConfig = {};
//   @Input() startDate: Date = new Date();

//   @Input()
//   get endDate(): Date { return this._endDate; }
//   set endDate(endDate: Date) {
//     this._endDate = new Date(endDate);
//     this._endDate.setDate(this._endDate.getDate() + 1);
//   }
//   private _endDate = new Date();
//   @Output () dblClickItem : EventEmitter <string>=new EventEmitter() 
//   @ViewChild("canvasgrid") canvasGrid: ElementRef | undefined;

//   gridSize: { [key: string]: string } = {}

//   optionsResult: GridsterConfig = {
//     fixedColWidth: gridCOnfig.rowHeight / gridCOnfig.colDiv,
//     fixedRowHeight: gridCOnfig.rowHeight,
//     pushItems: true,
//     displayGrid: 'none',
//     disableScrollHorizontal: true,
//     disableScrollVertical: true,
//     margin: 0,
//     mobileBreakpoint: 1,
//     outerMarginTop: 0,
//     outerMarginBottom: 0,
//     outerMarginLeft: 0,
//     outerMarginRight: 0,
//     pushDirections: { north: false, east: true, south: false, west: true },
//     // maxItemRows:1000,
//     draggable: {
//       enabled: true,
//       dropOverItems: true,
//     },
//     resizable: {
//       enabled: true,
//       handles: { s: false, e: true, n: false, w: true, se: false, ne: false, sw: false, nw: false },
//     },
//   };
//   showVar: boolean = false;
//   display : boolean=false; 
//   // dateValide : boolean=false; 

//   static itemChange(item: GridsterItem, itemComponent: GridsterItem) {
//     console.info('itemChanged', item, itemComponent);
//   }

//   static itemResize(item: GridsterItem, itemComponent: GridsterItem) {
//     console.info('itemResized', item, itemComponent);
//   }
//   hours: Hour[] = <Hour[]>[];
//   productionLines = <string[]>[];
//   dates = <string[]>[];
//   dateShowIndex : number = 0; 


//   ngOnInit(){
//     this.optionsResult.minCols = this.optionsResult.maxCols = (this.endDate.valueOf() - this.startDate.valueOf()) * gridCOnfig.colDiv / 3600000;
//     this.optionsResult.minRows = this.optionsResult.maxRows = this.dashboard.map(i => i.productionLine).filter((value, index, self) => self.indexOf(value) === index).length;
//     this.gridSize = this.calcWidthHeight(this.optionsResult);
//     this.hours = this.timePos();
//     this.productionLines = this.getProductionLines(this.dashboard)
//   }
  

//   ngOnChanges() {
//     this.dates = this.getDates(this.startDate, this.endDate);

//   }

//   ngAfterViewInit(): void {
//     console.log(this.canvasGrid);
//     this.drawGrid()
//   }

//   getProductionLines(dashboard: BoardItem[]): string[] {
//     const pLines = <string[]>[];
//     dashboard.forEach(i => {
//       if (pLines[i.y]) return;
//       pLines[i.y] = i.productionLine;
//     })
//     return pLines;
//   }

//   getDates(startDate: Date, endDate: Date): string[] {
//     const dates = <string[]>[];
//     if (startDate.valueOf() > endDate.valueOf()) return [];
//     let varDate = new Date(startDate);
//     dates.push(varDate.toDateString());
//     while (varDate.valueOf() < endDate.valueOf()) {
//       varDate.setDate(varDate.getDate() + 1);
//       dates.push(varDate.toDateString());
//     }
//     dates.length > 1 && dates.pop();

//     return dates;
//   }

//   timePos() {
//     const result: Hour[] = [];
//     const width = +this.gridSize.width.slice(0, -2);
//     console.log(width);
//     let hour = 1;
//     for (let i = 0; i < width; i = i + gridCOnfig.rowHeight) {
//       if (!i) continue;
//       const item = new Hour();
//       item.val = hour + ':00';
//       item.posX = i + 'px';
//       result.push(item);
//       ++hour;
//       if (hour == 24) hour = 0;
//     }
//     console.log("result," , result)
//     return result;
//   }

//   drawGrid() {
//     const canvas = this.canvasGrid?.nativeElement;
//     const context = canvas.getContext('2d');
//     canvas.height = +this.gridSize.height.slice(0, -2) + 4;
//     canvas.width = this.gridSize.width.slice(0, -2);
//     context.strokeStyle = '#ddd';
//     for (var i = gridCOnfig.rowHeight; i < canvas.width; i += gridCOnfig.rowHeight) {
//       context.moveTo(i, 0);
//       context.lineTo(i, canvas.height);
//       context.stroke();
//     }
//     for (var i = 0; i < canvas.height + 1; i += gridCOnfig.rowHeight) {
//       context.moveTo(0, i + 4);
//       context.lineTo(canvas.width, i);
//       context.stroke();
//     }
//   }


//   changedOptions() {
//     // this.options.api.optionsChanged();
//   }

//   removeItem(item: GridComponent) {
//     // this.dashboard.splice(this.dashboard.indexOf(item), 1);
//   }

//   addItem() {
//     // this.dashboard.push({});
//   }

//   calcWidthHeight(opt: GridsterConfig): { [key: string]: string } {
//     const result = { width: '', height: '' }
//     const {
//       fixedColWidth,
//       fixedRowHeight,
//       outerMarginLeft,
//       outerMarginRight,
//       outerMarginTop,
//       outerMarginBottom,
//       minCols,
//       minRows
//     } = opt;
//     result['width'] = ((fixedColWidth || 0) * (minCols || 0) + (outerMarginLeft || 0) + (outerMarginRight || 0)) + 'px';
//     result['height'] = ((fixedRowHeight || 0) * (minRows || 0) + (outerMarginTop || 0) + (outerMarginBottom || 0)) + 'px';
//     return result;
//   }
//   displayComponent(item : BoardItem  ) {
//     this.showVar=!this.showVar;
//     console.log("salut" , item)
//     this.dblClickItem.emit(item.id)
//   }

//   changeDate(action : string) {
//     if(this.dates.length > 0 ) {
//       if( action ==="before") {
//         this.dateShowIndex-=1;
//       } else {
//         this.dateShowIndex+=1;
//       }
//       if(this.dateShowIndex < 0 ) {
//         this.dateShowIndex=this.dates.length;
//       } else if (this.dateShowIndex > this.dates.length) {
//         this.dateShowIndex=0;
//       }

//       if(this.dates ==undefined) {
//         this.dateShowIndex=0;
//       }
//     }
//     console.log("nouvelle dates " , this.dates[this.dateShowIndex])
//   }
  

//   // getDatesOrder(dashboard: BoardItem[], startDate : Date , endDate : Date ): boolean {

//   //   const numberOrder=dashboard.length
//   //   var orderDateStart=new Date( dashboard[0].startTime)
//   //   var valide=false
//   //   for(let i=0; i < numberOrder; i++) {
//   //     console.log("startime",orderDateStart)
//   //     console.log('startDate' , this.startDate)
//   //     if(dashboard[i].startTime = startDate )
//   //     {
//   //       console.log('je suis ici')
//   //         valide=true;
//   //     }
//   //     else {
//   //       console.log("je suis la")
//   //     }
//   //   }
//   //   return valide;

//   // }


//   // clickItem(item : BoardItem) {
//   //   console.log("salut2" , item)
//   // }

// }

import { stringify } from '@angular/compiler/src/util';
import { Component, ElementRef, Input, OnChanges, OnInit, Output, ViewChild , EventEmitter } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { BoardItem } from '../board/models/boardItem.model';

const gridCOnfig = {
  rowHeight: 40,
  colDiv: 2,

}

class Hour {
  val: string;
  posX: string;
  constructor(opt?: { val: string, posX: string }) {
    this.val = opt?.val || "0:00";
    this.posX = opt?.posX || "0";
  }
}

export const optionsBase: GridsterConfig = {


};

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnChanges {
  @Input() dashboard: BoardItem[] = [];
  @Input() options: GridsterConfig = {};
  @Input() startDate: Date = new Date();

  @Input()
  get endDate(): Date { return this._endDate; }
  set endDate(endDate: Date) {
    this._endDate = new Date(endDate);
    this._endDate.setDate(this._endDate.getDate() + 1);
  }
  private _endDate = new Date();


  @ViewChild("canvasgrid") canvasGrid: ElementRef | undefined;
  @Output () dblClickItem : EventEmitter <string>=new EventEmitter() 

  gridSize: { [key: string]: string } = {}


  optionsResult: GridsterConfig = {
    fixedColWidth: gridCOnfig.rowHeight / gridCOnfig.colDiv,
    fixedRowHeight: gridCOnfig.rowHeight,
    pushItems: true,
    displayGrid: 'none',
    disableScrollHorizontal: true,
    disableScrollVertical: true,
    margin: 0,
    mobileBreakpoint: 1,
    outerMarginTop: 0,
    outerMarginBottom: 0,
    outerMarginLeft: 0,
    outerMarginRight: 0,
    pushDirections: { north: false, east: true, south: false, west: true },
    // maxItemRows:1000,
    draggable: {
      enabled: true,
      dropOverItems: true,
    },
    resizable: {
      enabled: true,
      handles: { s: false, e: true, n: false, w: true, se: false, ne: false, sw: false, nw: false },
    },
  };

  static itemChange(item: GridsterItem, itemComponent: GridsterItem) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: GridsterItem) {
    console.info('itemResized', item, itemComponent);
  }
  hours: Hour[] = <Hour[]>[];
  productionLines = <string[]>[];
  dates = <string[]>[];
  dateShowIndex : number = 0; 
  showVar: boolean = false;
    display : boolean=false; 

    ngOnInit(){
      this.optionsResult.minCols = this.optionsResult.maxCols = (this.endDate.valueOf() - this.startDate.valueOf()) * gridCOnfig.colDiv / 3600000;
      this.optionsResult.minRows = this.optionsResult.maxRows = this.dashboard.map(i => i.productionLine).filter((value, index, self) => self.indexOf(value) === index).length;
      this.gridSize = this.calcWidthHeight(this.optionsResult);
      this.hours = this.timePos();
      this.productionLines = this.getProductionLines(this.dashboard)
    }
    
  
    ngOnChanges() {
      this.dates = this.getDates(this.startDate, this.endDate);
      console.log("dashobard", this.dashboard)
    }
  
    ngAfterViewInit(): void {
      console.log(this.canvasGrid);
      this.drawGrid()
    }
  

  getProductionLines(dashboard: BoardItem[]): string[] {
    const pLines = <string[]>[];
    dashboard.forEach(i => {
      if (pLines[i.y]) return;
      pLines[i.y] = i.productionLine;
    })
    return pLines;
  }

  getDates(startDate: Date, endDate: Date): string[] {
    const dates = <string[]>[];
    if (startDate.valueOf() > endDate.valueOf()) return [];
    let varDate = new Date(startDate);
    dates.push(varDate.toDateString());
    while (varDate.valueOf() < endDate.valueOf()) {
      varDate.setDate(varDate.getDate() + 1);
      dates.push(varDate.toDateString());
    }
    dates.length > 1 && dates.pop();

    return dates;
  }

  timePos() {
    const result: Hour[] = [];
    const width = +this.gridSize.width.slice(0, -2);
    console.log(width);
    let hour = 1;
    for (let i = 0; i < width; i = i + gridCOnfig.rowHeight) {
      if (!i) continue;
      const item = new Hour();
      item.val = hour + ':00';
      item.posX = i + 'px';
      result.push(item);
      ++hour;
      if (hour == 24) hour = 0;
    }
    return result;
  }

  drawGrid() {
    const canvas = this.canvasGrid?.nativeElement;
    const context = canvas.getContext('2d');
    canvas.height = +this.gridSize.height.slice(0, -2) + 4;
    canvas.width = this.gridSize.width.slice(0, -2);
    context.strokeStyle = '#ddd';
    for (var i = gridCOnfig.rowHeight; i < canvas.width; i += gridCOnfig.rowHeight) {
      context.moveTo(i, 0);
      context.lineTo(i, canvas.height);
      context.stroke();
    }
    for (var i = 0; i < canvas.height + 1; i += gridCOnfig.rowHeight) {
      context.moveTo(0, i + 4);
      context.lineTo(canvas.width, i);
      context.stroke();
    }
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

    displayComponent(item : BoardItem  ) {
    this.showVar=!this.showVar;
    console.log("salut" , item)
    this.dblClickItem.emit(item.id)
  }


    changeDate(action : string) {
    if(this.dates.length > 0 ) {
      if( action ==="before") {
        this.dateShowIndex-=1;
      } else {
        this.dateShowIndex+=1;
      }
      if(this.dateShowIndex < 0 ) {
        this.dateShowIndex=this.dates.length;
      } else if (this.dateShowIndex > this.dates.length) {
        this.dateShowIndex=0;
      }

      if(this.dates ==undefined) {
        this.dateShowIndex=0;
      }
    }
    console.log("nouvelle dates " , this.dates[this.dateShowIndex])
  }

}

