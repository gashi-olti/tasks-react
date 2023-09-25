import TaskModel from "@/interfaces/task.interface";
import { StatusTypes } from "./status";

export const tasks: TaskModel[] = [
  {
    taskId: 1,
    title: "Lorem Ipsum",
    category: { id: 1, label: "Category 1" },
    assignedTo: { id: 1, label: "Employee 1" },
    status: "NEW",
    notes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy has ...",
  },
  {
    taskId: 2,
    title: "Lorem Ipsum",
    category: { id: 2, label: "Category 2" },
    assignedTo: { id: 2, label: "Employee 2" },
    status: "NEW",
    notes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy has ...",
  },
  {
    taskId: 3,
    title: "Lorem Ipsum",
    category: { id: 3, label: "Category 3" },
    assignedTo: { id: 3, label: "Employee 3" },
    status: "NEW",
    notes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy has ...",
  },
  {
    taskId: 4,
    title: "Lorem Ipsum",
    category: { id: 4, label: "Category 4" },
    assignedTo: { id: 4, label: "Employee 4" },
    status: "INPROGRESS",
    notes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy has ...",
  },
  {
    taskId: 5,
    title: "Lorem Ipsum",
    category: { id: 5, label: "Category 5" },
    assignedTo: { id: 5, label: "Employee 5" },
    status: "INPROGRESS",
    notes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy has ...",
  },
  {
    taskId: 6,
    title: "Lorem Ipsum",
    category: { id: 5, label: "Category 5" },
    assignedTo: { id: 4, label: "Employee 4" },
    status: "ONHOLD",
    notes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy has ...",
  },
  {
    taskId: 7,
    title: "Lorem Ipsum",
    category: { id: 5, label: "Category 5" },
    assignedTo: { id: 4, label: "Employee 4" },
    status: "ONHOLD",
    notes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy has ...",
  },
];

export const getFileredTasks = (status: StatusTypes) =>
  tasks.filter((task) => task.status === status);
