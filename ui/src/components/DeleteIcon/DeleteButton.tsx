import styles from "./DeleteButton.module.css";

interface DeleteButtonProps {
    itemId: number;
    ariaLabel: string;
    onDelete: (itemId: number) => void;
}

const DeleteButton = ({ itemId, ariaLabel, onDelete }: DeleteButtonProps) => {
    return (
        <button type="button" onClick={() => onDelete(itemId)} className={styles.redIcon} aria-label={ariaLabel}>X</button>
    )
}

export default DeleteButton;
