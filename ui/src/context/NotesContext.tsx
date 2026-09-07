import { createContext, useContext, useState } from "react";
import { Note, Task } from "../types/task";

// create values to be shared with whoever consuming the context
interface NotesContextValue {
    notes: Note[];
    tasks: Task[];
    addNote: (title: string) => void;
    deleteNote: (noteId: number) => void;
    addTask: (value: string, noteId: number) => void;
    deleteTasks: (ids: number[]) => void;
    updateTask: (id: number, value: string) => void;
}

// create a context that will be channeled to components consuming it
const NotesContext = createContext<NotesContextValue | undefined>(undefined);

// create a broadcaster or context provider that will supply the context values to its children components
export function NotesProvider({ children }: { children: React.ReactNode }) {
    const [notes, setNotes] = useState<Note[]>([])
    const [tasks, setTasks] = useState<Task[]>([])

    const addNote = (title: string) => {
        setNotes([...notes, { id: Date.now(), title: title, timeStamp: Date.now() }])
    }

    const deleteNote = (noteId: number) => {
        setNotes(notes.filter(note => note.id !== noteId))
    }

    const addTask = (value: string, noteId: number) => {
        const task = { id: Date.now(), content: value, timeStamp: Date.now(), noteId: noteId }
        setTasks([...tasks, task])
    }

    const deleteTasks = (ids: number[]) => {
        setTasks(tasks.filter(task => !ids.includes(task.id)))
    }

    const updateTask = (id: number, value: string) => {
        setTasks(prev => prev.map((task) => (task.id === id ? { ...task, content: value } : task)))
    }


    // everyone consuming this context will have access to the values.
    return (
        <NotesContext.Provider value={{ notes, tasks, addNote, deleteNote, addTask, deleteTasks, updateTask }}>
            {children}
        </NotesContext.Provider>
    )
}

// creating a custom hook that allows components to access the NotesContext values easily
// and throws an error if used outside of the NotesProvider.
export function useNotesContext() {
    const context = useContext(NotesContext)
    if (!context) throw new Error('useNotesContext must be within NotesProvider')
    return context
}
