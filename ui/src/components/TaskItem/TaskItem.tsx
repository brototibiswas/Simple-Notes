import DeleteButton from "../DeleteIcon/DeleteButton";
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
                <DeleteButton itemId={id} ariaLabel={`delete task ${value}`} onDelete={onDelete} />
            </li>
        </ul>
    )
}

export default TaskItem;
