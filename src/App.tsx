import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Task } from "./types/Tasks";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App: React.FC = ({}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await (fetch('https://61ed4fee31664a49.mokky.dev/task'));
        if (!response.ok) {
          throw new Error ('Network response not ok')
        }
        const data: Task[] = await response.json();
        setTasks(data);
      }
      catch (error){
        console.log("Ошибка", error)
      }
    }
    fetchTask();
  }, []);

  const handleAddTask = async (newTask: Task) => {
    try {
      const response = await fetch('https://61ed4fee31664a49.mokky.dev/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error('Ошибка при добавлении задачи');
      }

      const addedTask: Task = await response.json();
      setTasks(prevTasks => [...prevTasks, addedTask]);
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    }
  };

  //Удаление  задачи с  сервера и получаем новый список
  const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`https://61ed4fee31664a49.mokky.dev/task/${id}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) {
                throw new Error('Ошибка при удалении задачи');
            }
          
            // Обновляем состояние, удаляя задачу из списка
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Ошибка при удалении задачи:', error);
        }
          
    };


  return (
    <main>
      <h1>Список задач</h1>
      <div className="toDo_main">
        <TaskList tasks={tasks} onDeleteTask={handleDelete}/>
        <TaskForm onAddTask={handleAddTask} />
      </div>
    </main>
  );
};

export default App;