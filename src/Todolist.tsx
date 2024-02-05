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
    changeStatus: (TaskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value)
    }
    const onKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle('')
        }

    }
    const onClickButtonPlusHandler = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim())
            setNewTaskTitle('')
        }
        else {
            setError('Title is required!')
        }
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
            <input value={newTaskTitle}
                   onChange={onChangeInputHandler}
                   onKeyPress={onKeyHandler}
                   className={error ? 'error': ''}/>
            <button onClick={onClickButtonPlusHandler}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
        <ul>
            {props.tasks.map((el) => {
                const onClickRemoveHandler = () => {props.removeTask(el.id)}
                const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {props.changeStatus(el.id, e.currentTarget.checked)}
                return (<li key={el.id} className={el.isDone ? 'is-done': ''}><input type="checkbox" checked={el.isDone} onChange={onChangeCheckBoxHandler}/>
                    <span>{el.title}</span>
                    <button onClick={onClickRemoveHandler}>x
                    </button>
                </li>)
            })}
        </ul>
        <div>
            <button onClick={onClickAllHandler} className={props.filter === 'all' ? 'active-filter': ''}>All</button>
            <button onClick={onClickActiveHandler} className={props.filter === 'active' ? 'active-filter': ''}>Active</button>
            <button onClick={onClickCompletedHandler} className={props.filter === 'completed' ? 'active-filter': ''}>Completed</button>
        </div>
    </div>
}
