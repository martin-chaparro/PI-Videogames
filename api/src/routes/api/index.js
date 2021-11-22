const { Router } = require('express');
const videogameRoutes = require('./videogames')
const genresRoutes = require('./genres')

const router = new Router();

router.use('/videogames',videogameRoutes)
router.use('/genres',genresRoutes)

module.exports = router;