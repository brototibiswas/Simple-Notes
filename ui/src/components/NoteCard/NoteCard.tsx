import DeleteButton from "../DeleteIcon/DeleteButton";
import styles from "./NoteCard.module.css";

interface NoteCardProps {
    id: number
    title: string
    onDelete: (id: number) => void
}

const NoteCard = ({ id, title, onDelete }: NoteCardProps) => {
    return (
        <div className={styles.card} key={id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <DeleteButton itemId={id} ariaLabel={`delete note ${title}`} onDelete={onDelete} />
            </div>
        </div>
    )
}

export default NoteCard;
