import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Aside } from '../../layout/aside/Aside';
import { Content } from '../../layout/content/Content';
import { Header } from '../../layout/header/Header';
import { Main } from '../../layout/main/Main';

//import styles from './Home.module.css';
import { videoGameStartLoading } from '../../../redux/actions/videogames';
import { CardList } from '../../cardlist/CardList';
import { AsideControl } from '../../controls/asidecontrol/AsideControl';
import { Pagination } from '../../layout/pagination/Pagination';
import { HomeLoader } from '../../ui/loaders/homeloader/HomeLoader';
import { NotFound } from '../../ui/notfound/NotFound';

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
					<AsideControl setCurrentPage={setCurrentPage} />
				</Aside>
				<Content>
					{videogames && videogames.length > 0 ? (
						videogames[0].msg === 'No se encontraron resultados' ? (
							<NotFound />
						) : (
							<>
							<Pagination
								setCurrentPage={setCurrentPage}
								currentPage={currentPage}
								totalRecords={videogames.length}
								pageLimit={15}
								pageNeighbours={1}
							/>
							<CardList videogames={currentVideogames} />
							</>
						)
					) : (
						<HomeLoader />
					)}
				</Content>
			</Main>
		</div>
	);
};

// {videogames && (
/* <Pagination
	setCurrentPage={setCurrentPage}
	currentPage={currentPage}
	totalRecords={videogames.length}
	pageLimit={15}
	pageNeighbours={1}
/>; */
// 	)}
// 	{
// 		//TODO:Solucionar cuando no hay resultados
// 		currentVideogames && <CardList videogames={currentVideogames} />
// 	}
