import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {todolistAPI} from '../api/todolist-api';

export default {
    title: 'API'
};


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

        todolistAPI.getTodolist()
            .then(res => setState(res.data));

    }, []);
    return <div>{JSON.stringify(state)}</div>;
};


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        todolistAPI.createTodolist()
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
        const todolistId = 'b675e1bb-448b-4fea-a2ab-4141fddfaf19'
        todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE, BEACH!').then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

