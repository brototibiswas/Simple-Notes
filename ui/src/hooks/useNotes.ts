import { useState } from "react";
import { Note } from "../types/notes";
import { Task } from "../types/task";

export function useNotes() {
    const [notes, setNotes] = useState<Note[]>([])

    const createNote = (title: string) => {
        setNotes([...notes, { id: Date.now(), title: title, taskList: [] }])
    }

    const setTasksToNote = (noteId: number, taskList: Task[]) => {
        if (taskList.length === 0 || !noteId) return
        const selectedNote = notes.find(note => note.id === noteId)
        if (!selectedNote) return;
        selectedNote.taskList = taskList
        setNotes([...notes])
    }

    const deleteNote = (noteId: number) => {
        setNotes(notes.filter(note => note.id !== noteId))
    }

    return { notes, createNote, setTasksToNote, deleteNote }
}
