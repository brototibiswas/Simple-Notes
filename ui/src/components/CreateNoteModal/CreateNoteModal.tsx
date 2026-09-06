import { useRef } from "react";
import styles from "./CreateNoteModal.module.css";

interface CreateNoteModalProps {
    onCreateNote: (title: string) => void
    onModalClose: () => void
}

const CreateNoteModal = ({ onCreateNote, onModalClose }: CreateNoteModalProps) => {
    const noteTitleInputRef = useRef<HTMLInputElement>(null)

    const handleCreateNote = () => {
        if (noteTitleInputRef.current === null || noteTitleInputRef.current.value === "") { return }
        onCreateNote(noteTitleInputRef.current.value.trim())
        noteTitleInputRef.current.value = ""
        onModalClose()
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h3 style={{ marginBottom: '24px' }}>Create a New Note</h3>
                <input type="text" ref={noteTitleInputRef} placeholder="Enter note title" style={{ marginBottom: '12px', padding: '6px' }} />

                <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={handleCreateNote} style={{ padding: '6px', backgroundColor: 'lightgreen' }}>Create Note</button>
                    <button onClick={onModalClose} style={{ padding: '6px' }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default CreateNoteModal;
