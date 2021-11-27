import { Header } from '../../../layout/header/Header';
import { Main } from '../../../layout/main/Main';

import styles from './Newgame.module.css';

export const NewGame = () => {
	return (
		<div className="wrapper">
			<Header />
			<Main>
				<div className={styles.formColumn}>
					<form>
						<div className={styles.formBox}>
							<div>
								<label>Name: </label>
								<input
									type="text"
									name="name"
									placeholder="Ingrese un nombre"
								/>
							</div>
							<div>
								<label>Description: </label>
								<textarea name="description"></textarea>
							</div>
							<div>
								<label>Released: </label>
								<input type="date" name="released" />
							</div>
							<div>
								<label>Rating: </label>
								<textarea name="rating"></textarea>
							</div>
							<div>
								<label>
									<input type="checkbox" value="Aventuras" />
									Aventuras
								</label>
								<label>
									<input type="checkbox" value="Rol" />
									Rol
								</label>
								<label>
									<input type="checkbox" value="Accion" />
									Accion
								</label>
								<label>
									<input type="checkbox" value="Deportes" />
									Deportes
								</label>
								<label>
									<input type="checkbox" value="Lucha" />
									Lucha
								</label>
							</div>
							<div>
								<label>
									<input type="checkbox" value="PS5" />
									PS5
								</label>
								<label>
									<input type="checkbox" value="Nintendo" />
									Nintendo
								</label>
								<label>
									<input type="checkbox" value="Pc" />
									PC
								</label>
								<label>
									<input type="checkbox" value="Xbox" />
									Xbox
								</label>
								<label>
									<input type="checkbox" value="PS4" />
									PS4
								</label>
							</div>
							<div>
								<label>Image: </label>
								<input type="text" name="image" />
							</div>

							<div>
								<input type="submit" className="btnSubmit" value="Crear" />
							</div>
						</div>
					</form>
				</div>
			</Main>
		</div>
	);
};
