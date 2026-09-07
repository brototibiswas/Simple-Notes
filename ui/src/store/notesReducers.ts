import { Note, Task } from "../types/task"

export type NoteAction =
    { type: 'ADD_NOTE', title: string }
    | { type: 'DELETE_NOTE', id: number }
    | { type: 'ADD_TASK', noteId: number, content: string }
    | { type: 'UPDATE_TASK', id: number, content: string }
    | { type: 'DELETE_TASKS', ids: number[] }

export interface NotesState {
    notes: Note[];
    tasks: Task[];
}

export const initialState: NotesState = {
    notes: [],
    tasks: []
}

export function notesReducer(state: NotesState, action: NoteAction) {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, { id: Date.now(), title: action.title, timeStamp: Date.now() }]
            }

        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.id)
            }

        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, { id: Date.now(), content: action.content, timeStamp: Date.now(), noteId: action.noteId }]
            }

        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) => (task.id === action.id ? { ...task, content: action.content } : task))
            }

        case 'DELETE_TASKS':
            return {
                ...state,
                tasks: state.tasks.filter(task => !action.ids.includes(task.id))
            }

        default:
            return state
    }
}
