import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function VideogameApp() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default VideogameApp;
