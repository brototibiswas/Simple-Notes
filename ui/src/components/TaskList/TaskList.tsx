import { Task } from "../../types/task";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

interface TaskListProps {
    tasks: Task[]
    selectedIds: number[]
    onToggleTaskSelect: (id: number) => void
    onTaskUpdate: (id: number, value: string) => void;
}

const TaskList = ({ tasks, selectedIds, onToggleTaskSelect, onTaskUpdate }: TaskListProps) => {
    return (
        <div className={styles.taskListContainer}>
            {tasks.length === 0 && <p>No tasks to show</p>}
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {tasks.length > 0 &&
                    tasks.map((task) => (
                        <TaskItem value={task.content}
                            id={task.id}
                            isSelected={selectedIds.includes(task.id)}
                            onToggleSelect={onToggleTaskSelect}
                            onValueChange={onTaskUpdate}
                        />))}

            </ul>
        </div>
    )
}

export default TaskList;
