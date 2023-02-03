import React, {useEffect, useState} from 'react';
import {tasksAPI} from '../api/tasks-api';

export default {
    title: 'TASKS-API'
};


export const GetTasksFromDefiniteTodolist = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const todolistId = '47c6733e-050d-4b29-9907-51cfe905e576'
        tasksAPI.getTasksFromDefiniteTodolist(todolistId)
            .then(res => setState(res.data));

    }, []);
    return <div>{JSON.stringify(state)}</div>;
};


export const CreateTaskInTodolist = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const todolistId = '814044c4-556a-4fd9-b0a6-d3ba828dc877'
        const newTask = '3 New TASK, beach!!!'
        tasksAPI.createTasksInDefiniteTodolist(todolistId,newTask)
            .then(res => setState(res.data));
    }, []);

    return <div>{JSON.stringify(state)}</div>;
};


export const DeleteTaskFromTodolist = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const todolistId = '47c6733e-050d-4b29-9907-51cfe905e576'
        const taskId = '45466523-62dc-4863-958d-89134ad9ef44'
        tasksAPI.deleteTaskFromDefiniteTodolist(todolistId, taskId)
            .then(res => setState(res.data));
    }, []);

    return <div>{JSON.stringify(state)}</div>;
};


export const UpdateTaskInTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '47c6733e-050d-4b29-9907-51cfe905e576'
        const taskId = '45466523-62dc-4863-958d-89134ad9ef44'
        const newTitle = 'Updated title !!!'
        tasksAPI.updateTasksInDefiniteTodolist(todolistId, taskId,newTitle).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

