import { activityTypes } from "./boardItem.model";

export interface Batch {
  activityType: activityTypes;
  startTime: Date;
  endTime: Date;
  productionLine: string,
  process?: string,
  weight?: number,
  unitOfMeasure?: string
  typeOfProducts?: string
  status?: string
};