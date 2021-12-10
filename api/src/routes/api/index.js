const { Router } = require('express');
const genresRoutes = require('./genres')
const videogamesRoutes = require('./videogames')
const videogameRoutes = require('./videogame')

const router = new Router();

router.use('/genres',genresRoutes)
router.use('/videogames',videogamesRoutes)
router.use('/videogame',videogameRoutes)

module.exports = router;