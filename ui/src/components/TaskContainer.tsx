import { useRef, useState } from "react";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";
import { Task } from "../types/task";
import { useTasks } from "../hooks/useTasks";

const TaskContainer = () => {
    const { tasks, addTask, deleteTask } = useTasks()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid lightgrey', width: '500px', margin: '0 auto', padding: '12px' }}>
            <h1>Todo List</h1>
            <TaskForm onSubmit={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>

    )
}

export default TaskContainer;
