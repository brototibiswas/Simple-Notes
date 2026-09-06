import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import { useNotesContext } from "../../context/NotesContext";

interface TaskContainerProps {
    noteId: string | undefined;
}

const TaskContainer = ({ noteId }: TaskContainerProps) => {
    const { tasks, addTask, deleteTask } = useNotesContext()

    const onTaskAdd = (content: string) => {
        if (!noteId) return;
        addTask(content, Number(noteId));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid lightgrey', width: '500px', margin: '0 auto', padding: '12px' }}>
            <TaskForm onSubmit={onTaskAdd} />
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>

    )
}

export default TaskContainer;
