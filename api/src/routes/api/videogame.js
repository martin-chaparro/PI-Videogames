const { Router } = require('express');

const { getGame, createGame } = require('../../controllers/videogamesController')
const ValidationsGames = require('../../middlewares/validations/validationsGames')

const router = new Router();


router.get('/:gameId', getGame );
router.post('/',ValidationsGames.createGame, createGame );


module.exports = router;