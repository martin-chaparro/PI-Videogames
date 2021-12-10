import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './styles/styles.css';

function VideogameApp() {
	return (
		<div>
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</div>
	);
}

export default VideogameApp;
