import React from 'react';
import { Task } from '..//types/Tasks';
import TaskItem from './TaskItem'; 
import style from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => (
  <ul className={style.taskListMain}>
    {tasks.map(task => (
      <TaskItem key={task.id} task={task} />
    ))}
  </ul>
);

export default TaskList;