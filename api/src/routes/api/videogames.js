const { Router } = require('express');

const { getGames } = require('../../controllers/videogamesController');

const router = new Router();

router.get('/', getGames);

module.exports = router;
