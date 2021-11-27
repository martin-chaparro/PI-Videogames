
import styles from './Aside.module.css'

export const Aside = () => {
    return (
        <aside>
            <div className={styles.controlBox}>
                <div className={styles.filterBox}>Busqueda</div>
                <div className={styles.filterBox}>Orden ASC/DES</div>
                <div className={styles.filterBox}>Orden Rating</div>
                <div className={styles.filterBox}>Filtro Genero</div>
                <div className={styles.filterBox}>Filtro Creado o existente</div>
            </div>
        </aside>
    )
}
