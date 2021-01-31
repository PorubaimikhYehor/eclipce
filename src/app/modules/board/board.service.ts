import { Injectable } from '@angular/core';
import { Batch } from './models/batch.model';
import { BoardItem } from './models/boardItem.model';
import { StopLine } from './models/stop-line.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {


  createDashboard(opt: { batches?: Batch[], stops?: StopLine[], startDate?: Date, endDate?: Date }): BoardItem[] {
    console.log(opt);
    const boardItem: BoardItem[] = [];
    const { batches, stops } = opt;
    const productionLines: string[] = [];
    batches?.map(i => productionLines.push(i.productionLine));
    stops?.map(i => !productionLines.includes(i.productionLine) && productionLines.push(i.productionLine));

    //start and end date of board
    let startDate: Date;
    let endDate: Date;
    if (opt.startDate) startDate = opt.startDate;
    else if (!opt.startDate && (batches?.length || stops?.length)) {
      const dates: Date[] = [];
      batches?.map(i => dates.push(i.startTime))
      stops?.map(i => dates.push(i.startTime))
      startDate = new Date(dates.reduce(function (a, b) { return a < b ? a : b; }));
      startDate.setHours(0, 0, 0, 0);
    } else {
      startDate = new Date();
      startDate.setHours(0, 0, 0, 0);
    }
    if (opt.endDate) endDate = opt.endDate;
    else if (!opt.endDate && (batches?.length || stops?.length)) {
      const dates: Date[] = [];
      batches?.map(i => dates.push(i.endTime))
      stops?.map(i => dates.push(i.endTime))
      endDate = new Date(dates.reduce(function (a, b) { return a > b ? a : b; }));
      endDate.setHours(0, 0, 0, 0);
      endDate.setDate(endDate.getDate() + 1);
    } else {
      endDate = new Date();
      endDate.setHours(0, 0, 0, 0);
      endDate.setDate(endDate.getDate() + 1);
    }
    ////start and end date of board
    

    const createItems = (items: Batch[] | StopLine[]): void => {
      items.forEach((i: Batch | StopLine) => {
        const item: BoardItem = <BoardItem>JSON.parse(JSON.stringify(i));
        item.x = (i.startTime.valueOf() - startDate.valueOf()) * 2  / 3600000;
        item.cols = (i.endTime.valueOf() - i.startTime.valueOf()) * 2  / 3600000;
        item.y = productionLines.indexOf(item.productionLine);
        item.rows = 1;
        item.maxItemCols = 1000;
        boardItem.push(item)
      })
    }
    batches?.length && createItems(batches);
    return boardItem;
  }



}
