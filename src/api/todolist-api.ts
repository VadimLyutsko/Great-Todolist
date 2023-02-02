import axios from 'axios';

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}


// type CreateTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {
//         item: TodolistType
//     }
// }


// type UpdateTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }


// type DeleteTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'fc6ebcdb-f6a9-41a8-be91-442e2de121a0',
    },
});


export const todolistAPI = {
    getTodolist() {
        const promise = instance.get<Array<TodolistType>>('todo-lists');
        return promise;
    },

    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(
            `todo-lists/${todolistId}`,
            {title: title}
        );
        return promise;
    },

    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`);
        return promise;
    },

    createTodolist(title: string) {
        const promise =
            instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title});
        return promise;
    }
};
