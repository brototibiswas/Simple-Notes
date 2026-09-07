import styles from "./DeleteButton.module.css";

interface DeleteButtonProps {
    items: number[];
    ariaLabel: string;
    onDelete: (itemIds: number[]) => void;
}

const DeleteButton = ({ items, ariaLabel, onDelete }: DeleteButtonProps) => {

    const handleDeleteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onDelete(items)
    }
    return (
        <button type="button" onClick={(e) => handleDeleteClick(e)} className={styles.redIcon} aria-label={ariaLabel}>Delete</button>
    )
}

export default DeleteButton;
