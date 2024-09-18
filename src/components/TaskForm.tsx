import React, { useState } from 'react';
import { Task } from '..//types/Tasks';
import style from './TaskForm.module.css';

interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [newTaskName, setNewTaskName] = useState<string>('');
    const [newTaskStatus, setNewTaskStatus] = useState<boolean>(false);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskName(event.target.value);
    };

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskStatus(event.target.checked);
    };

    const handleSubmit = () => {
        if (newTaskName.trim() === '') {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        const newTask: Task = {
            id: 1, // Здесь можно заменить на логику для определения уникального ID
            name_task: newTaskName,
            status_task: newTaskStatus
        };

        onAddTask(newTask);
        setNewTaskName('');
        setNewTaskStatus(false);;
    };

    return (
        <div className={style.TaskForm}>
            <h2>Добавить новую задачу</h2>
            <label htmlFor="">Что нужно сделать</label>
            <input
                type="text"
                value={newTaskName}
                onChange={handleNameChange}
                placeholder="Например: Подготовить проектную документацию."
            />
            <label htmlFor="">Статус задачи</label>
            <input
                type="checkbox"
                checked={newTaskStatus}
                onChange={handleStatusChange}
            />
            <span>{newTaskStatus ? 'Завершено' : 'Не завершено'}</span> {/* Для отображения статуса */}
            <button className={style.button} onClick={handleSubmit}>Добавить</button>
        </div>
    );
};

export default TaskForm;