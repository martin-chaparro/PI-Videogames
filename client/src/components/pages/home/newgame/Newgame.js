import { Footer } from '../../../layout/footer/Footer';
import { Header } from '../../../layout/header/Header';
import { Main } from '../../../layout/main/Main';

export const NewGame = () => {
	return (
		<div className="wrapper">
			<Header />
			<Main>
				<h1>New Game Component</h1>
			</Main>
			<Footer />
		</div>
	);
};
