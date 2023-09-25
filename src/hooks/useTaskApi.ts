import { App } from "antd";
import React from "react";

import { tasks } from "src/utils/task";
import TaskModel from "src/interfaces/task.interface";

export default function useTaskApi() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { notification } = App.useApp();

  const createTask = (data: TaskModel) => {
    setIsLoading(true);
    const lastRecord = tasks.at(-1);

    const { title, category, assignedTo, notes } = data;

    const response = tasks.unshift({
      taskId: lastRecord?.taskId ? lastRecord?.taskId + 1 : -1,
      title: title,
      category: category,
      assignedTo: assignedTo,
      notes: notes,
      status: "NEW",
    });

    setIsLoading(false);

    notification.info({
      message: "Task successfully created",
      placement: "topRight",
    });

    return response;
  };

  const updateTask = (data: TaskModel, id: number) => {
    setIsLoading(true);

    const task = tasks.find((item) => item.taskId === id);
    const { title, category, assignedTo, notes } = data;

    if (!task) {
      notification.error({
        message: "Failed to update the selected task",
        placement: "topRight",
      });

      return -1;
    }

    task.title = title;
    task.category = category;
    task.assignedTo = assignedTo;
    task.notes = notes;

    setIsLoading(false);

    notification.info({
      message: "Task successfully update",
      placement: "topRight",
    });

    return 1; // we can return the response obj itself in real world apps
  };

  const deleteTask = (id: number) => {
    setIsLoading(true);

    // delete

    setIsLoading(false);

    notification.info({
      message: "Task successfully deleted",
      placement: "topRight",
    });

    return 1;
  };

  return {
    createTask,
    updateTask,
    deleteTask,
    isLoading,
  };
}
