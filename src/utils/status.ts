import TaskModel from "@/interfaces/task.interface";

export type StatusTypes =
  | "NEW"
  | "INPROGRESS"
  | "ONHOLD"
  | "CANCELLED"
  | "COMPLETED";

export const statuses = {
  NEW: "New",
  INPROGRESS: "In Progress",
  ONHOLD: "On Hold",
  CANCELLED: "Canceled",
  COMPLETED: "Completed",
};

export const getStatus = (statusKey: string) =>
  statuses[statusKey as keyof typeof statuses];

export const statusSum = (tasks: TaskModel[], statusKey: string) => {
  let total = 0;

  tasks.forEach((task) => {
    if (task.status === statusKey) {
      total++;
    }
  });

  return total;
};
