import React, { useState } from 'react';
import { Task } from '..//types/Tasks';
import style from './TaskForm.module.css';

interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [newTaskName, setNewTaskName] = useState<string>('');
    const [newTaskInfo, setNewTaskInfo] = useState<string>('');
    const [newTaskStatus, setNewTaskStatus] = useState<boolean>(false);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskName(event.target.value);
    };

    const handleInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskInfo(event.target.value);
    }; 

    const handleSubmit = () => {
        if (newTaskName.trim() === '') {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        const newTask: Task = {
            id: Date.now(),
            name_task: newTaskName,
            info_task: newTaskInfo,
            status_task: newTaskStatus
        };

        onAddTask(newTask);
        setNewTaskName('');
        setNewTaskInfo('');
        setNewTaskStatus(false);;
    };

    return (
        <div className={style.TaskForm}>
            <h2>Добавить новую задачу</h2>
            <label htmlFor="">Что запланируем на сегодня?</label>
            <input
                type="text"
                value={newTaskName}
                onChange={handleNameChange}
                placeholder="Например: Подготовить проектную документацию."
            />
            <label htmlFor="">А если конкретнее?</label>
             <input
                type="text"
                value={newTaskInfo}
                onChange={handleInfoChange}
                placeholder="Например: по ферстке"
            />
            <button className={style.button} onClick={handleSubmit}>Добавить задачу</button>
        </div>
    );
};

export default TaskForm;