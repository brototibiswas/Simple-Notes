import { useRef } from "react";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
    onSubmit: (value: string) => void;
}

const TaskForm = ({ onSubmit }: TaskFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onTaskAdd = (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputRef.current || inputRef.current.value === '') return;
        onSubmit(inputRef.current.value)
        inputRef.current.value = ''
    }

    return (
        <form className={styles.inputItem} onSubmit={(e) => onTaskAdd(e)}>
            <input type="text" placeholder="Enter a task" ref={inputRef} />
            <button type="submit" aria-label="add task">Add</button>
        </form>
    )
}

export default TaskForm;
