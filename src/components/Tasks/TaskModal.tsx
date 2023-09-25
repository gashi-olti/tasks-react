import { Grid, Modal } from "antd";
import TaskModel from "src/interfaces/task.interface";
import TaskForm from "./TaskForm";

const { useBreakpoint } = Grid;

interface Props {
  open: boolean;
  task?: TaskModel;
  onClose: () => void;
  onSuccess: (response: number) => void;
}

export default function TaskModal({ open, task, onClose, onSuccess }: Props) {
  const screens = useBreakpoint();

  const isDesktop = screens["lg"];

  return (
    <Modal
      title={task ? "Update Task" : "Create Task"}
      open={open}
      onCancel={onClose}
      footer={null}
      width={isDesktop ? 1000 : "unset"}
      centered
    >
      <TaskForm task={task} onClose={onClose} onSuccess={onSuccess} />
    </Modal>
  );
}
