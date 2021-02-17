import { Component, OnInit, Input } from '@angular/core';
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
    id : "1",
    name: 'strawberrry',
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
    id : "2",
    name: 'strawberrry',
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
    id : "3",
    name: 'strawberrry',
    startTime: new Date("2021-01-23T16:00:00Z"),
    endTime: new Date("2021-01-24T16:15:00Z"),
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
  @Input() showComponent: boolean =false;
  selectedItem : BoardItem | undefined | null; 

  formVar : FormGroup =<FormGroup>{}; 
  dashboard: BoardItem[] = [];
  startDate: Date = new Date()
  endDate: Date = new Date()
  dates : string[] = []
  showVar: boolean = false;
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
    
    console.log("dashboard", this.dashboard);
    
  

  }
  buttonTogglesChanged(e:string ) {
    console.log(e);
    
  }

    
  public addDays(date:Date,days: number) : Date {
    date.setDate(date.getDate()+days);
    return date;
  }

  public getDates(startDate :string , endDate :string ) : string[] {
    let dateArray  = new Array();
    let currentDate = new Date(startDate);
    while (currentDate <= new Date(endDate)) {
        dateArray.push(new Date(currentDate).toDateString());
        currentDate =this.addDays(currentDate,1);
    }
    return dateArray;
  }
  public clickSearch(): void { 
    // this.dates=this.getDates(this.formVar.value.inputStartDate,this.formVar.value.inputEndDate);

    this.startDate = new Date(this.formVar.value.inputStartDate);
    this.endDate = new Date(this.formVar.value.inputEndDate);
    const valueStart= this.formVar.value.inputStartDate.length
    const valueEnd=this.formVar.value.inputEndDate.length

    if (valueEnd==0 || valueStart==0) {
      console.log("empty")
      alert("Start Date or End Date empty")
      
    }
    
}

dblClickItem(id : string) {
  console.log("id board compenent : " , id) 
  this.selectedItem=this.dashboard.find(i => i.id == id)
}

clickButtonHide() {
  this.selectedItem=null;
}
}