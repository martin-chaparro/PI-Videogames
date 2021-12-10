import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Header } from '../components/layout/header/Header';

configure({ adapter: new Adapter() });

describe('<Header /> con Navlink', () => {
	let header;
	// Si o si vas a tener que usar class component! No van a correr ninguno de los tests si no lo haces. <3
	beforeEach(() => {
		header = shallow(<Header displaNav={true} />);
	});

	it('Debería renderizar un <Link to="" />', () => {
		// Podes importar el componente Link de react-router-dom.
		expect(header.find(Link).length).toBeGreaterThanOrEqual(1);
	});

	it('Debería renderizar dos <NavLink to="" />', () => {
		// Podes importar el componente Link de react-router-dom.
		expect(header.find(NavLink).length).toBeGreaterThanOrEqual(2);
	});

	it('Debería tener un NavLink con el texto "Home" que cambie la ruta hacia "/home"', () => {
		// El orden en el que se declaran los Links es importante!
		expect(header.find(NavLink).at(0).prop('to')).toEqual('/home');
		expect(header.find(NavLink).at(0).text()).toEqual('Home');
	});

	it('Debería tener un segundo NavLink, con texto "New Game" y que cambie la ruta hacia "/home/new"', () => {
		expect(header.find(NavLink).at(1).prop('to')).toEqual('/home/new');
		expect(header.find(NavLink).at(1).text()).toEqual('New Game');
	});
});

describe('<Header /> sin Navlink', () => {
	let header;
	// Si o si vas a tener que usar class component! No van a correr ninguno de los tests si no lo haces. <3
	beforeEach(() => {
		header = shallow(<Header displaNav={false} />);
	});

	it('Debería renderizar un <Link to="" />', () => {
		// Podes importar el componente Link de react-router-dom.
		expect(header.find(Link).length).toBeGreaterThanOrEqual(1);
	});

	it('No Debería renderizar dos <NavLink to="" />', () => {
		// Podes importar el componente Link de react-router-dom.
		expect(header.find(NavLink).length).toBeGreaterThanOrEqual(0);
	});

});
