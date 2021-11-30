import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Aside } from '../../layout/aside/Aside';
import { Content } from '../../layout/content/Content';
import { Header } from '../../layout/header/Header';
import { Main } from '../../layout/main/Main';

import styles from './Home.module.css';
import { videoGameStartLoading } from '../../../redux/actions/videogames';
import { CardList } from '../../cardlist/CardList';
import { AsideControl } from '../../controls/asidecontrol/AsideControl';

export const Home = () => {
	const dispatch = useDispatch();

	const { videogames } = useSelector((state) => state.videogames);

	const [currentPage, setCurrentPage] = useState(1);
	const gamesPerPage = 15;

	let currentVideogames = videogames.slice(
		currentPage * gamesPerPage - gamesPerPage,
		currentPage * gamesPerPage
	);

	//console.log(currentVideogames)

	useEffect(() => {
		dispatch(videoGameStartLoading());
	}, [dispatch]);

	return (
		<div className="wrapper">
			<Header displaNav={true} />
			<Main>
				<Aside>
					<AsideControl setCurrentPage={setCurrentPage}/>
				</Aside>
				<Content>
					<div className={styles.paginationBox}>
						<div className={styles.pagination}>
							<button
								className={styles.btn}
								onClick={() => setCurrentPage(currentPage - 1)}
							>
								Prev
							</button>
							<button
								className={styles.btn}
								onClick={() => setCurrentPage(currentPage + 1)}
							>
								Next
							</button>
						</div>
					</div>
					{
						//TODO:Solucionar cuando no hay resultados
						currentVideogames && <CardList videogames={currentVideogames} />
					}
				</Content>
			</Main>
		</div>
	);
};
