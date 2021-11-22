const { Router } = require('express');

const router = new Router();
 const { getGenres } = require('../../controllers/genresController')


router.get('/', getGenres );

module.exports = router;