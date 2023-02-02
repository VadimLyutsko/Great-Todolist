import axios from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'fc6ebcdb-f6a9-41a8-be91-442e2de121a0',
    },
};

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = axios.put(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            {title: title},
            settings
        );
        return promise;
    },

    deleteTodolist(todolistId: string) {
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings);
        return promise;
    },

    createTodolist() {
        const promise =  axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'NewTodoTitle-Vadim'}, settings)
        return promise;
    },

    getTodolist() {
        const promise =  axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise;
    },

};
