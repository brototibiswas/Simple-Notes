import { useState } from "react";
import CreateNoteModal from "../../components/CreateNoteModal/CreateNoteModal";
import NoteCard from "../../components/NoteCard/NoteCard";
import styles from "./Dashboard.module.css";
import { useNotes } from "../../hooks/useNotes";

const Dashboard = () => {
    const [showCreateNoteModal, setShowCreateNoteModal] = useState(false)

    const { notes, createNote, deleteNote } = useNotes();

    const toggleCreateNoteModal = () => {
        setShowCreateNoteModal(!showCreateNoteModal)
    }

    return (
        <div className={`${styles.container} ${styles.center}`} style={{ backgroundColor: '#f0f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '15px' }}>
                <h1>ToDo List Notes</h1>
                <button onClick={toggleCreateNoteModal}>Add Note</button>
            </div>

            {showCreateNoteModal && <CreateNoteModal onCreateNote={createNote} onModalClose={toggleCreateNoteModal} />}

            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '6px', flexWrap: 'wrap', alignContent: 'flex-start', alignItems: 'flex-start' }}>
                {notes.length > 0 && notes.map(note => (
                    <NoteCard id={note.id} title={note.title} onDelete={deleteNote} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard;
