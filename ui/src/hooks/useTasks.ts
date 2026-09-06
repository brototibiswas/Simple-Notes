import { useState } from "react";
import { Task } from "../types/task";

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (value: string) => {
        const task = { id: Date.now(), content: value }
        setTasks([...tasks, task])
    }

    const deleteTask = (id: number) => {
        setTasks(prev => prev.filter((item) => item.id !== id))
    }

    return { tasks, addTask, deleteTask }
}
