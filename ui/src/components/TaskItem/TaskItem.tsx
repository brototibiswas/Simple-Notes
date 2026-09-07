import { useState, useEffect } from "react";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
    value: string;
    id: number;
    isSelected: boolean;
    onToggleSelect: (id: number) => void;
    onValueChange: (id: number, value: string) => void
}

const TaskItem = ({ value, id, isSelected, onToggleSelect, onValueChange }: TaskItemProps) => {
    const [draftValue, setDraftValue] = useState(value)

    // sync local draft value to upstream value in case something changes it
    useEffect(() => {
        setDraftValue(value)
    }, [value])

    const commitValueChange = () => {
        if (draftValue.trim() === "") {
            setDraftValue(value) // nothing changed, revert to last committed value from upstream
            return
        }

        if (draftValue !== value) {
            onValueChange(id, draftValue.trim()) // draft was changed, commit the new value
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.currentTarget.blur() // trigger onBlur to commit the value change
        }
        if (e.key === "Escape") {
            setDraftValue(value) // revert to last committed value from upstream
            e.currentTarget.blur() // trigger onBlur to commit the value change
        }
    }

    return (
        <li key={`task-${id}`} className={styles.taskItemContainer}>
            <input type="checkbox"
                checked={isSelected}
                onChange={() => onToggleSelect(id)} />

            <input type="text"
                value={draftValue}
                className={styles.taskItemText}
                onBlur={commitValueChange}
                onChange={(e) => setDraftValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </li>
    )
}

export default TaskItem;
