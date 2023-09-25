import * as React from "react";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MenuOutlined } from "@ant-design/icons";
import Table, { ColumnsType } from "antd/es/table";
// import { Document, Page } from "@react-pdf/renderer";

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  "data-row-key": string;
}

const Row = ({ children, ...props }: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props["data-row-key"],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: "relative", zIndex: 9999 } : {}),
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if ((child as React.ReactElement).key === "sort") {
          return React.cloneElement(child as React.ReactElement, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{ touchAction: "none", cursor: "move" }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

interface Props {
  columns?: ColumnsType<any>;
  data?: any;
  onRowClick?: (row: any) => void;
}

export default function TableList({ data, columns, onRowClick }: Props) {
  const [dataSource, setDataSource] = React.useState<any>([]);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((previous: any) => {
        const activeIndex = previous.findIndex(
          (i: any) => i.taskId === active.id
        );
        const overIndex = previous.findIndex((i: any) => i.taskId === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  React.useEffect(() => {
    if (data) setDataSource(data);
  }, [data]);

  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        items={dataSource.map((i: any) => i.taskId)}
        strategy={verticalListSortingStrategy}
      >
        {/* <Document>
          <Page> */}
        <Table
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="taskId"
          columns={columns}
          dataSource={dataSource}
          loading={!data}
          onRow={(row) => {
            return {
              onClick: () => onRowClick && onRowClick(row),
            };
          }}
        />
        {/* </Page>
        </Document> */}
      </SortableContext>
    </DndContext>
  );
}
