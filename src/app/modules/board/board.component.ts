import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';
import { Batch } from './models/batch.model';
import { ActivityType, BoardItem } from './models/boardItem.model';

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
    startTime: new Date("2021-01-20T16:45:00Z"),
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
    endTime: new Date("2021-01-21T00:32:00Z"),
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

  dashboard: BoardItem[] = [];
  startDate: Date = new Date("2021-01-20T00:00:00Z")
  endDate: Date = new Date("2021-01-26T00:00:00Z")

  constructor(
    private boardSrv: BoardService,
  ) { }

  ngOnInit(): void {
    this.dashboard = this.boardSrv.createDashboard({
      batches: fakeDboard,
      //  startDate: new Date("2021-01-20T00:00:00Z"),
      //  endDate: new Date("2021-01-26T00:00:00Z")
    });
    console.log(this.dashboard);

  }

}
