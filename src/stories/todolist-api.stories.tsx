import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {todolistAPI} from '../api/todolist-api';

export default {
    title: 'API'
};


const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'fc6ebcdb-f6a9-41a8-be91-442e2de121a0'
    }
};


// export const GetTodolists = () => {
//     const [state, setState] = useState<any>(null);
//     useEffect(() => {
//         // здесь мы будем делать запрос и ответ закидывать в стейт.
//         // который в виде строки будем отображать в div-ке
//
//         axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
//             .then(res => setState(res.data));
//
//     }, []);
//     return <div>{JSON.stringify(state)}</div>;
// };

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

// export const CreateTodolist = () => {
//     const [state, setState] = useState<any>(null);
//     useEffect(() => {
//         axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'NewTodoTitle-Vadim'}, settings)
//             .then(res => setState(res.data));
//     }, []);
//
//     return <div>{JSON.stringify(state)}</div>;
// };


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        todolistAPI.createTodolist()
            .then(res => setState(res.data));
    }, []);

    return <div>{JSON.stringify(state)}</div>;
};


// const delTodoId = '94e5a03c-8227-4dee-863a-e234e7607eff'
//
// export const DeleteTodolist = () => {
//     const [state, setState] = useState<any>(null);
//     useEffect(() => {
//         axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${delTodoId}`, settings)
//             .then(res => setState(res.data));
//     }, []);
//
//     return <div>{JSON.stringify(state)}</div>;
// };



export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const todolistId = 'b675e1bb-448b-4fea-a2ab-4141fddfaf19'
        todolistAPI.deleteTodolist(todolistId)
            .then(res => setState(res.data));
    }, []);

    return <div>{JSON.stringify(state)}</div>;
};


// export const UpdateTodolistTitle = () => {
//     const [state, setState] = useState<any>(null);
//     useEffect(() => {
//         axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${updateTodoTitle}`,
//             {title:`It's new title, beach`},
//             settings)
//             .then(res => setState(res.data));
//     }, []);
//
//     return <div>{JSON.stringify(state)}</div>;
// };

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

