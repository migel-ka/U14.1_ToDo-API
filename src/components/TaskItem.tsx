import React from 'react';
import { Task } from '..//types/Tasks';

interface TaskItemProps {
  task: Task;
  onDeleteTask: (id: number) => void; // Добавляем пропс для удаления задачи
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDeleteTask }) => {
  return (
    <li key={task.id}>
      <strong>{task.name_task}</strong> - Статус: {task.status_task}
      <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
    </li>
  );
};

export default TaskItem;

