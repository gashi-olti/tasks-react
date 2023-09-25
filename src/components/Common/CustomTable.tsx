/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import * as React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button, Col, Row, Space } from "antd";
import SearchBar from "./SearchBar";
import { FilePdfOutlined, PlusOutlined } from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";
import Flex from "./Base/Flex";
import { ColumnsType } from "antd/es/table";
import TableList from "./TableList";

interface Props {
  columns: ColumnsType<any>;
  data?: any;
  onButtonClick?: () => void;
  onRowClick?: (row: any) => void;
}

export default function CustomTable({
  columns,
  data,
  onButtonClick,
  onRowClick,
}: Props) {
  return (
    <Row gutter={[10, 10]}>
      <Col span={24}>
        <Row>
          <Col xs={24} md={12}>
            <SearchBar value="" setValue={() => {}} />
          </Col>
          <Col xs={24} md={12}>
            <Flex justifyContent="flex-end" alignContent="flex-end">
              <Space direction="horizontal">
                <PDFDownloadLink
                  document={<TableList />}
                  fileName={`${new Date()}-Tasks`}
                >
                  {({ blob, url, loading, error }) => (
                    <Button
                      icon={<FilePdfOutlined />}
                      tw="bg-blue-500 text-white"
                      //   loading={loading}
                    />
                  )}
                </PDFDownloadLink>
                <ButtonGroup>
                  <Button tw="bg-green-500 text-white" onClick={onButtonClick}>
                    Create New
                  </Button>
                  <Button
                    icon={<PlusOutlined />}
                    tw="bg-green-500 text-white"
                    onClick={onButtonClick}
                  />
                </ButtonGroup>
              </Space>
            </Flex>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <TableList columns={columns} data={data} onRowClick={onRowClick} />
      </Col>
    </Row>
  );
}
