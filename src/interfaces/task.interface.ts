import { EmployeeModel } from "src/utils/employee";
import { CategoryModel } from "src/utils/category";
import { StatusTypes } from "src/utils/status";

export default interface TaskModel {
  key?: string;
  taskId: number;
  title: string;
  category: CategoryModel;
  assignedTo: EmployeeModel;
  status?: StatusTypes;
  notes: string;
}

export type StatusType =
  | "New"
  | "In Progress"
  | "On Hold"
  | "Completed"
  | "Canceled";
