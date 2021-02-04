import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';
import { Batch } from './models/batch.model';
import { ActivityType, BoardItem } from './models/boardItem.model';
import {FormBuilder, FormGroup} from '@angular/forms';

const fakeDboard = <Batch[]>[
  {
    // x: 0, 
    // y: 0, 
    // cols: 10, 
    // rows: 1, 
    activityType: 'batch',
    startTime: new Date("2021-01-23T16:00:00Z"),
    endTime: new Date("2021-01-24T16:15:00Z"),
    process: 'p1',
    productionLine: 'pl1',
    typeOfProducts: 'tp1',
    unitOfMeasure: 'kg',
    weight: 100,
  },
  {
    // x: 0, 
    // y: 0, 
    // cols: 10, 
    // rows: 1, 
    activityType: 'batch',
    startTime: new Date("2021-01-20T13:47:00Z"),
    endTime: new Date("2021-01-21T16:45:00Z"),
    process: 'p1',
    productionLine: 'pl1',
    typeOfProducts: 'tp1',
    unitOfMeasure: 'kg',
    weight: 100,
  },
  {
    // x: 0, 
    // y: 0, 
    // cols: 10, 
    // rows: 1, 
    activityType: 'batch',
    startTime: new Date("2021-01-20T16:45:00Z"),
    endTime: new Date("2021-01-21T00:45:00Z"),
    process: 'p1',
    productionLine: 'pl2',
    typeOfProducts: 'tp1',
    unitOfMeasure: 'kg',
    weight: 100,
  },

]

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  formVar : FormGroup =<FormGroup>{}; 
  dashboard: BoardItem[] = [];
  startDate: Date = new Date("2021-01-20T00:00:00Z")
  endDate: Date = new Date("2021-01-26T00:00:00Z")
  dates : string[] = []
  constructor(
    private boardSrv: BoardService,
    private fBuilder : FormBuilder,
  ) { }

  
  ngOnInit(): void {
    this.dashboard = this.boardSrv.createDashboard({
      batches: fakeDboard,
      //  startDate: new Date("2021-01-20T00:00:00Z"),
      //  endDate: new Date("2021-01-26T00:00:00Z")
      })
      this.formVar = this.fBuilder.group({
        inputStartDate : '',
        inputEndDate :''
    });
    
    console.log(this.dashboard);
    
  

  }
  buttonTogglesChanged(e:string ) {
    console.log(e);
    
  }

  // public display(startDate : string , endDate : string) {
  //   console.log("startDate", startDate.split('-'))
  //   const dateStart=startDate.split('-')
  //   console.log("month", dateStart[1])
  //   const yearsStart=dateStart[0]
  //   const monthStart=dateStart[1]
  //   const dayStart=dateStart[2]


  //   const dateEnd=endDate.split('-');
  //   const yearsEnd=dateEnd[0];
  //   const monthEnd=dateEnd[1];
  //   const dayEnd=dateEnd[2];

  //   if( parseInt(yearsStart)==parseInt(yearsEnd)){
  //     if( parseInt(monthStart)==parseInt(monthEnd)) {
  //       if( parseInt(dayStart)==parseInt(dayEnd)) {
  //         console.log("pas possible");
  //       }

  //       else {
  //         for(let i=0; i<=Math.abs(parseInt(dayStart)-parseInt(dayEnd));i++) {
  //          let day=parseInt(dayStart)+i;
  //           this.dates[i] = day.toString()+'-'+monthStart+'-'+yearsStart;
  //         }
  //       }

  //     }

  //     else {
  //       ///better method ???

  //     }
  //   }

  // }


  public addDays(date:Date,days: number) : Date {
    date.setDate(date.getDate()+days);
    return date;
  }

  public getDates(startDate :string , endDate :string ) : string[] {
    var dateArray  = new Array();
    var currentDate = new Date(startDate);
    while (currentDate <= new Date(endDate)) {
        dateArray.push(new Date(currentDate).toISOString());
        currentDate =this.addDays(currentDate,1);
    }
    return dateArray;
  }
  public onSubmit(): void { 
    this.dates=this.getDates(this.formVar.value.inputStartDate,this.formVar.value.inputEndDate)
    console.log("je suis la" ,this.dates);
  }

}
