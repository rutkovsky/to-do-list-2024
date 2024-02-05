import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'completed' | "active"

function App() {

    let [tasks, setTasks] = useState<TaskType[]>([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Redux", isDone: false }
    ]);

    let [filter, setFilter] = useState<FilterValuesType>('all');

    let tasksForTodolist = tasks;
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(tas => tas.isDone === true)
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(tas => tas.isDone === false)
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    function addTask(newTaskTitle: string) {
        let newTask = {id: v1(), title: newTaskTitle, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks);
    }

    function changeStatus (TaskId: string, isDone: boolean) {
        let task = tasks.find( t => t.id === TaskId)
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }

    function changeFilter(filterValue: FilterValuesType) {
        setFilter(filterValue)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask} changeStatus={changeStatus} filter={filter}/>
        </div>
    );
}

export default App;
