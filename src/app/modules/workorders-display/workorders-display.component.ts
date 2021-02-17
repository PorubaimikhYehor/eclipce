import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Batch } from  '../board/models/batch.model';



// const fakeWorkorders = <Batch[]>[
//   {
//     // x: 0, 
//     // y: 0, 
//     // cols: 10, 
//     // rows: 1, 
//     activityType: 'batch',
//     startTime: new Date("2021-01-23T16:00:00Z"),
//     endTime: new Date("2021-01-24T16:15:00Z"),
//     process: 'p1',
//     productionLine: 'pl1',
//     typeOfProducts: 'tp1',
//     unitOfMeasure: 'kg',
//     weight: 100,
//   },
//   {
//     // x: 0, 
//     // y: 0, 
//     // cols: 10, 
//     // rows: 1, 
//     activityType: 'batch',
//     startTime: new Date("2021-01-20T13:47:00Z"),
//     endTime: new Date("2021-01-21T16:45:00Z"),
//     process: 'p1',
//     productionLine: 'pl1',
//     typeOfProducts: 'tp1',
//     unitOfMeasure: 'kg',
//     weight: 100,
//   },
//   {
//     // x: 0, 
//     // y: 0, 
//     // cols: 10, 
//     // rows: 1, 
//     activityType: 'batch',
//     startTime: new Date("2021-01-20T16:45:00Z"),
//     endTime: new Date("2021-01-21T00:45:00Z"),
//     process: 'p1',
//     productionLine: 'pl2',
//     typeOfProducts: 'tp1',
//     unitOfMeasure: 'kg',
//     weight: 100,
//   },

// ]
@Component({
  selector: 'app-workorders-display',
  templateUrl: './workorders-display.component.html',
  styleUrls: ['./workorders-display.component.scss']
})
export class WorkordersDisplayComponent implements OnChanges {
  dates = <string[]>[];
  dataDates=<string []> [];
  
  @Input() startDate: Date = new Date();

  @Input()
  get endDate(): Date { return this._endDate; }
  set endDate(endDate: Date) {
    this._endDate = new Date(endDate);
    this._endDate.setDate(this._endDate.getDate() + 1);
  }
  private _endDate = new Date();


  ngOnChanges(): void {
    this.dates=this.getDates(this.startDate.toDateString(), this.endDate.toDateString());
    // this.dataDates=this.getDataDates();
    // this.dates=this.compareDates(this.dates,)

}

public addDays(date:Date,days: number) : Date {
  date.setDate(date.getDate()+days);
  return date;
}

public getDates(startDate :string , endDate :string ) : string[] {
  var dateArray  = new Array();
  var currentDate = new Date(startDate);
  while (currentDate <= new Date(endDate)) {
      dateArray.push(new Date(currentDate).toDateString());
      currentDate =this.addDays(currentDate,1);
  }
  return dateArray;
}


// public getDataDates(startDate: Date, endDate: Date): string[] {
//   const dates = <string[]>[];
//   if (startDate.valueOf() > endDate.valueOf()) return [];
//   let varDate = new Date(startDate);
//   dates.push(varDate.toDateString());
//   while (varDate.valueOf() < endDate.valueOf()) {
//     varDate.setDate(varDate.getDate() + 1);
//     dates.push(varDate.toDateString());
//   }
//   dates.length > 1 && dates.pop();

//   return dates;
// }

}
