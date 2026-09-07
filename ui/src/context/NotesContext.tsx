import { createContext, useContext, useReducer, useState } from "react";
import { Note, Task } from "../types/task";
import { notesReducer, initialState } from "../store/notesReducers";

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
    const [state, dispatch] = useReducer(notesReducer, initialState)

    const addNote = (title: string) => dispatch({ type: 'ADD_NOTE', title })

    const deleteNote = (noteId: number) => dispatch({ type: "DELETE_NOTE", id: noteId })

    const addTask = (value: string, noteId: number) => dispatch({ type: "ADD_TASK", content: value, noteId: noteId })

    const deleteTasks = (ids: number[]) => dispatch({ type: "DELETE_TASKS", ids })

    const updateTask = (id: number, value: string) => dispatch({ type: "UPDATE_TASK", id, content: value })


    // everyone consuming this context will have access to the values.
    return (
        <NotesContext.Provider value={{ ...state, addNote, deleteNote, addTask, deleteTasks, updateTask }}>
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
