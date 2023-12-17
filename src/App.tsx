import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let tasks1 = [
        {id: 1, isDone: true, name: 'Task 1'},
        {id: 2, isDone: true, name: 'Task 2'},
        {id: 3, isDone: true, name: 'Task 3'}
    ]

    let tasks2 = [
        {id: 1, isDone: true, name: 'Task 9'},
        {id: 2, isDone: true, name: 'Task 8'},
        {id: 3, isDone: false, name: 'Task 7'}
    ]

    return (
        <div className="App">
            <Todolist title="1" tasks={tasks1}/>
            <Todolist title="2" tasks={tasks2}/>
        </div>
    );
}

export default App;

