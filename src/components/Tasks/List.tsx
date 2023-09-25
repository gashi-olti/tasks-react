/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { ColumnsType } from "antd/es/table";

import TaskModel from "src/interfaces/task.interface";
import CustomTable from "src/components/Common/CustomTable";
import { getStatus } from "src/utils/status";
import { Button, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Text from "../Common/Base/Text";

interface Props {
  tasks: TaskModel[];
  onButtonClick?: () => void;
  onRowClick?: (row: any) => void;
  onRowDelete?: (row: any) => void;
}

export default function List({
  tasks,
  onButtonClick,
  onRowClick,
  onRowDelete,
}: Props) {
  const columns: ColumnsType<TaskModel> = [
    { key: "sort" },
    { title: "ID", dataIndex: "taskId", key: "taskId" },
    { title: "Task Title", dataIndex: "title", key: "taskId" },
    {
      title: "Category",
      dataIndex: "category",
      key: "taskId",
      render: (_, { category }) => {
        return category.label;
      },
    },
    {
      title: "Assigned To",
      dataIndex: "assignedTo",
      key: "taskId",
      render: (_, { assignedTo }) => {
        return assignedTo.label;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "taskId",
      render: (_, { status }) => {
        let color = undefined;
        if (status === "NEW") color = "#EE8A35";
        else if (status === "INPROGRESS") color = "#F6CB52";
        else if (status === "ONHOLD") color = "#E9C466";
        else if (status === "CANCELLED") color = "#E75651";
        else if (status === "COMPLETED") color = "#7AC14D";

        return (
          <div
            tw="px-4 py-1 text-center text-white rounded"
            css={{ background: color }}
          >
            {getStatus(status!)}
          </div>
        );
      },
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "taskId",
      render: (_, { notes }) => {
        return <div dangerouslySetInnerHTML={{ __html: notes }} />;
      },
    },
    {
      title: "Actions",
      onCell: () => {
        return {
          onClick: (event) => event.stopPropagation(),
        };
      },
      render: (row) => {
        return (
          <Space>
            <Button
              onClick={() => onRowClick && onRowClick(row)}
              tw="bg-blue-500 text-white"
            >
              Edit
            </Button>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => onRowDelete && onRowDelete(row)}
              tw="bg-red-500 text-white"
            />
          </Space>
        );
      },
    },
  ];

  return (
    <CustomTable
      columns={columns}
      data={tasks}
      onButtonClick={onButtonClick}
      onRowClick={onRowClick}
    />
  );
}
