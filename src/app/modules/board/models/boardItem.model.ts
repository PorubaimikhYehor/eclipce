import { GridsterItem } from "angular-gridster2";

export declare type activityTypes = 'batch' | 'stop';

export declare enum ActivityType {
  Batch = "batch",
  Stop = "stop",
};


export interface BoardItem extends GridsterItem {
  activityType: activityTypes;
  startTime: Date;
  endTime: Date;
  productionLine: string,
  process?: string,
  weight?: number,
  unitOfMeasure?: string
  typeOfProducts?: string
};