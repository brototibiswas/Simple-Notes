import styles from "./TaskItem.module.css";

interface TaskItemProps {
    value: string;
    id: number;
    onDelete: (id: number) => void
}

const TaskItem = ({ value, id, onDelete }: TaskItemProps) => {
    return (
        <ul key={`task-${id}`} className={styles.taskItemContainer}>
            <li>
                <p className={styles.taskItemText}>{value}</p>
                <button type="button" onClick={() => onDelete(id)} className={styles.taskDeleteBtn} aria-label={`delete task ${value}`}>X</button>
            </li>
        </ul>
    )
}

export default TaskItem;
