import React from 'react';
import { Task } from '../types/Tasks';
import TaskItem from './TaskItem'; 
import style from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onUpdateTask: (id: number, status: boolean) => void; // Добавлено свойство onUpdateTask
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onUpdateTask }) => { // Добавлено onUpdateTask
  return (
    <section className={style.taskListMain}>
      <h2>Список задач</h2>
      <ul className={style.taskList}>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDeleteTask={onDeleteTask} 
            onUpdateTask={onUpdateTask} // Передаем onUpdateTask
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;