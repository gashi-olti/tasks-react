/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import * as React from "react";
import { Button, Col, Form, Input, Row, Select, Space } from "antd";

import TaskModel from "src/interfaces/task.interface";
import FormItem from "antd/es/form/FormItem";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { CategoryModel, categories } from "src/utils/category";
import { EmployeeModel, employees } from "src/utils/employee";
import { formats, modules } from "src/utils/editorToolbar";
import Flex from "src/components/Common/Base/Flex";
import useTaskApi from "src/hooks/useTaskApi";
import ButtonGroup from "antd/es/button/button-group";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

interface Props {
  task?: TaskModel;
  onClose: () => void;
  onSuccess: (response: number) => void;
}

export default function TaskForm({ task, onClose, onSuccess }: Props) {
  const [form] = Form.useForm();

  const defaultValues = React.useMemo(
    () => ({
      ...task,
      title: task?.title ?? "",
      category: task?.category ?? categories[0],
      assignedTo: task?.assignedTo ?? employees[0],
      status: task?.status ?? "",
      notes: task?.notes ?? "",
    }),
    [task]
  );

  const { createTask, updateTask, isLoading } = useTaskApi();

  const handleChangeCategory = (value: CategoryModel) => {
    form.setFieldsValue({ category: value });
  };

  const handleChangeAssignedTo = (value: EmployeeModel) => {
    form.setFieldsValue({ assignedTo: value });
  };

  React.useEffect(() => {
    form.setFieldsValue(defaultValues);
  }, [form, task]);

  const submitForm = async (data: TaskModel) => {
    const response = task ? updateTask(data, task.taskId) : createTask(data);
    if (onSuccess) {
      onSuccess(response);
    }
  };

  return (
    <Form
      form={form}
      initialValues={defaultValues}
      onFinish={submitForm}
      layout="vertical"
      style={{ marginTop: 20 }}
    >
      <Row gutter={[10, 10]}>
        <Col xs={24} lg={10}>
          <FormItem<TaskModel> label="Task Title" name="title">
            <Input />
          </FormItem>
        </Col>
        <Col xs={24} lg={7}>
          <FormItem<TaskModel> label="Category" name="category">
            <Select style={{ width: "100%" }} onChange={handleChangeCategory}>
              {categories.map((category) => (
                <Option value={category.id}>{category.label}</Option>
              ))}
            </Select>
          </FormItem>
        </Col>
        <Col xs={24} lg={7}>
          <FormItem<TaskModel> label="Assigned To" name="assignedTo">
            <Select style={{ width: "100%" }} onChange={handleChangeAssignedTo}>
              {employees.map((employee) => (
                <Option value={employee.id}>{employee.label}</Option>
              ))}
            </Select>
          </FormItem>
        </Col>
        <Col span={24}>
          <FormItem<TaskModel> label="Notes" name="notes">
            <ReactQuill
              value={defaultValues?.notes}
              formats={formats}
              modules={modules}
              theme="snow"
              css={{ height: 200 }}
            />
          </FormItem>
        </Col>
      </Row>
      <Flex justifyContent="space-between" tw="mt-10">
        <ButtonGroup>
          <Button onClick={onClose} tw="bg-red-500 text-white">
            Close & Don't Save
          </Button>
          <Button icon={<CloseOutlined />} tw="bg-red-500 text-white" />
        </ButtonGroup>
        <ButtonGroup>
          <Button
            htmlType="submit"
            loading={isLoading}
            tw="bg-green-500 text-white px-8"
          >
            Create
          </Button>
          <Button icon={<CheckOutlined />} tw="bg-green-500 text-white" />
        </ButtonGroup>
      </Flex>
    </Form>
  );
}
