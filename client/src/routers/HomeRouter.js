import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/pages/home/Home';
import { NewGame } from '../components/pages/home/newgame/Newgame';
import { ViewGame } from '../components/pages/home/viewgame/ViewGame';

export const HomeRouter = () => {
	return (
		<div>
			<Routes>
				<Route path="/new" element={<NewGame />} />
				<Route path="/view" element={<ViewGame />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</div>
	);
};
