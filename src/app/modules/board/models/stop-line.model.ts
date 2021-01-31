import { activityTypes } from "./boardItem.model";

export interface StopLine {
  activityType: activityTypes;
  startTime: Date;
  endTime: Date;
  productionLine: string,
  process?: string,
};