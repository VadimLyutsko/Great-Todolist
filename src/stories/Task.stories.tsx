import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Task} from '../Task';

export default {
    title: 'My stories/Tasks',
    component: Task,
} as ComponentMeta<typeof Task>;


const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskDoneStory = Template.bind({});
TaskDoneStory.args = {
    task: {
        id: '2465877aaa',
        isDone: true,
        title: 'newTaskTitle'
    },
    todolistId: '2465877bbb',
    changeTaskStatus: action('changeTaskStatus'),
    changeTaskTitle: action('changeTaskTitle'),
    removeTask: action('removeTask')
};


export const TaskNotDoneStory = Template.bind({});
TaskNotDoneStory.args = {
    task: {
        id: '12345ty',
        isDone: false,
        title: 'TaskTitle'
    },
    todolistId: '2465877bbb',
    changeTaskStatus: action('changeTaskStatus'),
    changeTaskTitle: action('changeTaskTitle'),
    removeTask: action('removeTask')
};

