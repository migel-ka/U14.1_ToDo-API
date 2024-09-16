import React, { useState } from 'react';
import { Task } from '..//types/Tasks';

interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [newTaskName, setNewTaskName] = useState<string>('');
    const [newTaskStatus, setNewTaskStatus] = useState<string>('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskName(event.target.value);
    };

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskStatus(event.target.value);
    };

    const handleSubmit = () => {
        if (newTaskName.trim() === '' || newTaskStatus.trim() === '') {
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
        setNewTaskStatus('');
    };

    return (
        <div>
            <h2>Добавить новую задачу</h2>
            <input
                type="text"
                value={newTaskName}
                onChange={handleNameChange}
                placeholder="Название задачи"
            />
            <input
                type="text"
                value={newTaskStatus}
                onChange={handleStatusChange}
                placeholder="Статус задачи"
            />
            <button onClick={handleSubmit}>Добавить</button>
        </div>
    );
};

export default TaskForm;