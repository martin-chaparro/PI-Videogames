
import { Aside } from '../../layout/aside/Aside';
import { Content } from '../../layout/content/Content';
import { Footer } from '../../layout/footer/Footer';
import { Header } from '../../layout/header/Header';
import { Main } from '../../layout/main/Main';

export const Home = () => {
	return (
		<div className="wrapper">
			<Header displaNav={true} />
			<Main>
				<Aside></Aside>
				<Content/>
			</Main>
			<Footer />
		</div>
	);
};
