import axios from 'axios';

type ResponseGetType = {
    items: Array<TaskType>
    totalCount: number
    error: string | null
}

type ResponseCreateType = {
    data: {
        item: {
            id: string
            title: string,
            addedDate: string,
            order: number
        }
    },
    messages: string[],
    fieldsErrors?: Array<string>
    resultCode: number
}

type ResponseUpdateType = {
    data: {
        item: Array<TaskType>
    },
    messages: string[],
    fieldsErrors?: Array<string>
    resultCode: number
}

// type ResponseDeleteType ={
//     data:{}
//     messages: Array<string>,
//     fieldsErrors?: Array<string>
//     resultCode: number
// }

type TaskType = {
    id?: string
    title?: string
    description?: string | null
    todoListId?: string
    order?: number
    status?: number
    priority?: number
    startDate?: string | null
    deadline?: string | null
    completed?: boolean
    addedDate?: string
}


export type ResponseType<D={}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'fc6ebcdb-f6a9-41a8-be91-442e2de121a0',
    },
});


export const tasksAPI = {
    getTasksFromDefiniteTodolist(todolistId: string) {
        return instance.get<ResponseGetType>(`todo-lists/${todolistId}/tasks`);
    },

    createTasksInDefiniteTodolist(todolistId: string, title: string) {
        return instance.post<ResponseCreateType>(`todo-lists/${todolistId}/tasks`, {title});
    },

    updateTasksInDefiniteTodolist(todolistId: string, taskId: string, title: string) {
        return instance.put<ResponseUpdateType>(
            `todo-lists/${todolistId}/tasks/${taskId}`,
            {title}
        );
    },

    deleteTaskFromDefiniteTodolist(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
    },
};
