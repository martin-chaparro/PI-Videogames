const { Router } = require('express');

const { getGames, getGame, createGame } = require('../../controllers/videogamesController')

const router = new Router();

router.get('/', getGames );
router.get('/:gameId', getGame );
router.post('/', createGame );


module.exports = router;