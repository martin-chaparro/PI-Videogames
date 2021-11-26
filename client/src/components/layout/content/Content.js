
import styles from './Content.module.css'

export const Content = () => {
    return (
        <div className={styles.content}>
            <h1>Content Component</h1>
            <h1>Area de tarjetas y juegos</h1>
					<p>
						En este diseño, las áreas se muestran en el orden en que están
						escritas en las pantallas de menos de 500 píxeles de ancho. Pasamos
						a un diseño de dos columnas, y luego a uno de tres columnas mediante
						la redefinición de la rejilla y la colocación de los elementos en
						ella.
					</p>
        </div>
    )
}
