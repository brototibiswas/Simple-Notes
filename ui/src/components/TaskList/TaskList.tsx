import { Task } from "../../types/task";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

interface TaskListProps {
    tasks: Task[]
    onDelete: (id: number) => void
}

const TaskList = ({ tasks, onDelete }: TaskListProps) => {

    return (
        <div className={styles.taskListContainer}>
            {tasks.length === 0 && <p>No tasks to show</p>}
            {tasks.length > 0 && tasks.map((task) => (<TaskItem value={task.content} id={task.id} onDelete={() => onDelete(task.id)} />))}
        </div>
    )
}

export default TaskList;
