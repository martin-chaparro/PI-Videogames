import { Header } from '../../../layout/header/Header';
import { Main } from '../../../layout/main/Main';

import styles from './ViewGame.module.css';

export const ViewGame = () => {
	return (
		<div className="wrapper">
			<Header />
			<Main>
				<div className={styles.imgColumn}>
					<div className={styles.imgContainer}>
						<img
							src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className={styles.dataColumn}>
					<div className={styles.dataContainer}>
						<h1>Titulo del Juego</h1>
						<h3>Generos</h3>
						<ul>
							<li>Accion</li>
							<li>Rol</li>
							<li>Aventuras</li>
						</ul>
						<h3>Descripcion:</h3>
						<p>
							Rockstar Games went bigger, since their previous installment of
							the series. You get the complicated and realistic world-building
							from Liberty City of GTA4 in the setting of lively and diverse Los
							Santos, from an old fan favorite GTA San Andreas. 561 different
							vehicles (including every transport you can operate) and the
							amount is rising with every update. <br />
							\nSimultaneous storytelling from three unique perspectives: <br />
							\nFollow Michael, ex-criminal living his life of leisure away from
							the past, Franklin, a kid that seeks the better future, and
							Trevor, the exact past Michael is trying to run away from. <br />
							\nGTA Online will provide a lot of additional challenge even for
							the experienced players, coming fresh from the story mode. Now you
							will have other players around that can help you just as likely as
							ruin your mission. Every GTA mechanic up to date can be
							experienced by players through the unique customizable character,
							and community content paired with the leveling system tends to
							keep everyone busy and engaged.
						</p>
						<h3>Fecha de lanzamiento</h3>
						<p>2013-09-17</p>
						<h3>Rating</h3>
						<p>3.5/5</p>
						<h3>Plataformas</h3>
						<ul>
							<li>Playstation</li>
							<li>Xbox</li>
							<li>Nintendo</li>
						</ul>
					</div>
				</div>
			</Main>
		</div>
	);
};
