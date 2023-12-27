import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'completed' | "active"

function App() {

    let [tasks, setTasks] = useState<TaskType[]>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: false }
    ]);

    let [filter, setFilter] = useState<FilterValuesType>('all');

    let tasksForTodolist = tasks;
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(tas => tas.isDone === true)
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(tas => tas.isDone === false)
    }

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    function changeFilter(filterValue: FilterValuesType) {
        setFilter(filterValue)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
