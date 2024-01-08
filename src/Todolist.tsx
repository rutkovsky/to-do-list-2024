import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (filterValue: FilterValuesType) => void
    addTask: (newTaskTitle: string) => void
}

export function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value)
    }
    const onKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle('')
        }
    }
    const onClickButtonPlusHandler = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('')
    }
    const onClickAllHandler = () => {
        props.changeFilter('all')
    }
    const onClickActiveHandler = () => {
        props.changeFilter('active')
    }
    const onClickCompletedHandler = () => {
        props.changeFilter('completed')
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTaskTitle} onChange={onChangeInputHandler} onKeyPress={onKeyHandler}/>
            <button onClick={onClickButtonPlusHandler}>+</button>
        </div>
        <ul>
            {props.tasks.map((el) => {
                const onClickRemoveHandler = () => {props.removeTask(el.id)}
                return (<li key={el.id}><input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                    <button onClick={onClickRemoveHandler}>x
                    </button>
                </li>)
            })}
        </ul>
        <div>
            <button onClick={onClickAllHandler}>All</button>
            <button onClick={onClickActiveHandler}>Active</button>
            <button onClick={onClickCompletedHandler}>Completed</button>
        </div>
    </div>
}
