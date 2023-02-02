import axios from 'axios';




const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'fc6ebcdb-f6a9-41a8-be91-442e2de121a0',
    },
})



export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put(
            `todo-lists/${todolistId}`,
            {title: title}
        );
        return promise;
    },

    deleteTodolist(todolistId: string) {
        const promise = instance.delete(`todo-lists/${todolistId}`);
        return promise;
    },

    createTodolist() {
        const promise =  instance.post('todo-lists', {title: 'NewTodoTitle-Vadim'})
        return promise;
    },

    getTodolist() {
        const promise =  instance.get('todo-lists')
        return promise;
    },

};
