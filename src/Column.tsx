import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import Task from "./Task";

interface ColumnProps {
  column: {
    id: string;
    title: string;
    color?: string;
    taskIds: string[];
  };
  tasks: Array<{ id: string; content: string }>;
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <div className="column-container" style={{ backgroundColor: column.color }}>
      <h3 className="column-title">{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`task-list ${
              snapshot.isDraggingOver ? "is-dragging-over" : ""
            }`}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
