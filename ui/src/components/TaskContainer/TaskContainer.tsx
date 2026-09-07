import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import { useNotesContext } from "../../context/NotesContext";
import { useState, useMemo } from "react";
import DeleteButton from "../DeleteIcon/DeleteButton";

interface TaskContainerProps {
    noteId: string | undefined;
}

const TaskContainer = ({ noteId }: TaskContainerProps) => {
    const { tasks, addTask, deleteTasks, updateTask } = useNotesContext()
    const [selectedTaskIds, setSelectedTaskIds] = useState<number[]>([])

    const tasksForNote = tasks.filter(task => task.noteId === Number(noteId))

    const onTaskAdd = (content: string) => {
        if (!noteId) return;
        addTask(content, Number(noteId));
    }

    const handleTaskToggle = (id: number) => {
        const isSelected = selectedTaskIds.includes(id)
        if (isSelected) {
            setSelectedTaskIds(selectedTaskIds.filter(taskId => taskId !== id))
        } else {
            setSelectedTaskIds([...selectedTaskIds, id])
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid lightgrey', width: '500px', margin: '0 auto', padding: '12px' }}>
            <TaskForm onSubmit={onTaskAdd} />
            <TaskList tasks={tasksForNote} selectedIds={selectedTaskIds} onToggleTaskSelect={handleTaskToggle} onTaskUpdate={updateTask} />

            {selectedTaskIds.length > 0 && (
                <DeleteButton items={selectedTaskIds}
                    ariaLabel="Delete selected tasks"
                    onDelete={deleteTasks} />)}

        </div>

    )
}

export default TaskContainer;
