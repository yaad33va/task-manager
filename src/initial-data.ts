const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Walk dog" },
    "task-2": { id: "task-2", content: "Watch tv show" },
    "task-3": { id: "task-3", content: "eat" },
    "task-4": { id: "task-4", content: "sleep" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "to do",
      color: "#e0e0e0", // Light Gray
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "in progress",
      color: "#fff3cd", // Light Yellow
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "done",
      color: "#d4edda", // Light Green
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
