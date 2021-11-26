import { Footer } from '../../layout/footer/Footer';
import { Header } from '../../layout/header/Header';
import { Main } from '../../layout/main/Main';

export const Landing = () => {
	return (
		<div className="wrapper">
			<Header />
			<Main>
				<h1>Landing</h1>
			</Main>
			<Footer />
		</div>
	);
};
