import React from 'react';
import { Task } from '../types/Tasks';
import style from './TaskItem.module.css';

interface TaskItemProps {
  task: Task;
  onDeleteTask: (id: number) => void; // Добавляем пропс для удаления задачи
  onUpdateTask: (id: number, status: boolean) => void; // Пропс для обновления задачи
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDeleteTask, onUpdateTask }) => {
  const handleCheckboxChange = () => {
    onUpdateTask(task.id, !task.status_task); // Переключаем статус задачи
  };
  return (
    <li 
    key={task.id}
    className = {task.status_task ? style.complited : style.pending}
    >
      <strong>{task.name_task}</strong>
      <div className={style.button_input}>
      <input 
      type="checkbox" 
      checked={task.status_task}
      onChange={handleCheckboxChange} />
      <button className={style.button} onClick={() => onDeleteTask(task.id)}> &#x2715;</button>
      </div>
    </li>
  );
};

export default TaskItem;

