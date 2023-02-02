import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {todolistAPI} from '../api/todolist-api';

export default {
    title: 'API'
};


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        todolistAPI.getTodolist()
            .then(res => setState(res.data));

    }, []);
    return <div>{JSON.stringify(state)}</div>;
};


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const newTodoTitle = 'New title, beach!!!'
        todolistAPI.createTodolist(newTodoTitle)
            .then(res => setState(res.data));
    }, []);

    return <div>{JSON.stringify(state)}</div>;
};


export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const todolistId = '7411e68a-3887-4c63-973e-77631e790b9e'
        todolistAPI.deleteTodolist(todolistId)
            .then(res => setState(res.data));
    }, []);

    return <div>{JSON.stringify(state)}</div>;
};


export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '47c6733e-050d-4b29-9907-51cfe905e576'
        todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE, BEACH!').then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

