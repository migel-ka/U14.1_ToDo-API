import React from 'react';
import { Task } from '..//types/Tasks';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => (
  <li>
    <strong>{task.name_task}</strong> - Статус: {task.status_task}
  </li>
);

export default TaskItem;