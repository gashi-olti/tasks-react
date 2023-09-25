/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import * as React from "react";
import { Row, Col, App } from "antd";

import CustomContainer from "src/components/Common/CustomContainer";
import { getFileredTasks, tasks } from "src/utils/task";
import { StatusTypes } from "src/utils/status";
import TaskModel from "src/interfaces/task.interface";

import Statistics from "./Statistics";
import List from "./List";
import TaskModal from "./TaskModal";

export default function Tasks() {
  const [filteredTasks, setFilteredTasks] = React.useState<TaskModel[]>([]);
  const [selectedFilter, setSelectedFilter] = React.useState<
    StatusTypes | undefined
  >(undefined);
  const [selectedTask, setSelectedTask] = React.useState<TaskModel | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { modal, notification } = App.useApp();

  const handleFilterTasks = (value: StatusTypes) => {
    setSelectedFilter(value);
  };

  const createTask = () => {
    setIsModalOpen(true);
  };

  const updateTask = (task: TaskModel) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedTask(undefined);
  };

  const handleModalSuccess = async (response: any) => {
    if (response > 0) {
      setIsModalOpen(false);
      setSelectedTask(undefined);

      setFilteredTasks(tasks);
    }
  };

  const deleteTask = (task: TaskModel) => {
    modal.confirm({
      title: "Are you sure you want to delete the selected task?",
      onOk: () => {}, //call the function to delete the task
    });
  };

  React.useEffect(() => {
    if (tasks) {
      setFilteredTasks(tasks);
    }
  }, [tasks]);

  React.useEffect(() => {
    if (selectedFilter === "NEW") {
      setFilteredTasks(getFileredTasks("NEW"));
    } else if (selectedFilter === "INPROGRESS") {
      setFilteredTasks(getFileredTasks("INPROGRESS"));
    } else if (selectedFilter === "ONHOLD") {
      setFilteredTasks(getFileredTasks("ONHOLD"));
    } else if (selectedFilter === "CANCELLED") {
      setFilteredTasks(getFileredTasks("CANCELLED"));
    } else if (selectedFilter === "COMPLETED") {
      setFilteredTasks(getFileredTasks("COMPLETED"));
    }
  }, [selectedFilter]);

  return (
    <CustomContainer>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Statistics
            tasks={tasks}
            onHandleFilterTasks={(value: StatusTypes) =>
              handleFilterTasks(value)
            }
          />
        </Col>
        <Col span={24}>
          <List
            tasks={filteredTasks}
            onButtonClick={createTask}
            onRowClick={(task) => updateTask(task)}
            onRowDelete={(task) => deleteTask(task)}
            key={filteredTasks as any}
          />
        </Col>
      </Row>

      <TaskModal
        open={isModalOpen}
        task={selectedTask}
        onClose={handleCancel}
        onSuccess={(response) => handleModalSuccess(response)}
      />
    </CustomContainer>
  );
}
