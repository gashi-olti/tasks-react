/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import "./index.css";

import { Button, Col, Row, Grid } from "antd";

import { StatusTypes, getStatus, statusSum } from "src/utils/status";
import TaskModel from "src/interfaces/task.interface";
import Headline from "src/components/Common/Base/Headline";
import Text from "src/components/Common/Base/Text";

const { useBreakpoint } = Grid;

interface Props {
  tasks: TaskModel[];
  onHandleFilterTasks: (value: StatusTypes) => void;
}

export default function Statistics({ tasks, onHandleFilterTasks }: Props) {
  const screens = useBreakpoint();

  const isDesktop = screens["lg"];

  let newTasks = statusSum(tasks, "NEW");
  let inProgressTasks = statusSum(tasks, "INPROGRESS");
  let onHoldTasks = statusSum(tasks, "ONHOLD");
  let cancelledTasks = statusSum(tasks, "CANCELLED");
  let completedTasks = statusSum(tasks, "COMPLETED");

  return (
    <Row gutter={[10, 10]}>
      <Col xs={24} sm={12} md={6} flex={isDesktop ? 2 : undefined}>
        <Button
          block
          tw="h-full py-2"
          css={{ background: "#EE8A35" }}
          onClick={() => onHandleFilterTasks("NEW")}
        >
          <Headline textWhite>{newTasks}</Headline>
          <Text textWhite>New</Text>
        </Button>
      </Col>
      <Col xs={24} sm={12} md={6} flex={isDesktop ? 2 : undefined}>
        <Button
          block
          tw="h-full py-2"
          css={{ background: "#F6CB52" }}
          onClick={() => onHandleFilterTasks("INPROGRESS")}
        >
          <Headline textWhite>{inProgressTasks}</Headline>
          <Text textWhite>In Progress</Text>
        </Button>
      </Col>
      <Col xs={24} sm={12} md={6} flex={isDesktop ? 2 : undefined}>
        <Button
          block
          tw="h-full py-2"
          css={{ background: "#E9C466" }}
          onClick={() => onHandleFilterTasks("ONHOLD")}
        >
          <Headline textWhite>{onHoldTasks}</Headline>
          <Text textWhite>On Hold</Text>
        </Button>
      </Col>
      <Col xs={24} sm={12} md={6} flex={isDesktop ? 2 : undefined}>
        <Button
          block
          tw="h-full py-2"
          css={{ background: "#E75651" }}
          onClick={() => onHandleFilterTasks("CANCELLED")}
        >
          <Headline textWhite>{cancelledTasks}</Headline>
          <Text textWhite>Cancelled</Text>
        </Button>
      </Col>
      <Col xs={24} sm={12} md={6} flex={isDesktop ? 2 : undefined}>
        <Button
          block
          tw="h-full py-2"
          css={{ background: "#7AC14D" }}
          onClick={() => onHandleFilterTasks("COMPLETED")}
        >
          <Headline textWhite>{completedTasks}</Headline>
          <Text textWhite>Completed</Text>
        </Button>
      </Col>
    </Row>
  );
}
