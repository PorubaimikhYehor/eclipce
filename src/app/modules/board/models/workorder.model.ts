import { activityTypes } from "./boardItem.model";

export interface Workorders {
  activityType: activityTypes;
  startTime: Date;
  endTime: Date;
  weight?: number,
  unitOfMeasure?: string
  typeOfProducts?: string
  status?: string
};