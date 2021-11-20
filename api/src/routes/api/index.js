
  
const { Router } = require('express');

const { getHome } = require('../../controllers/homeController')

const router = new Router();

router.get('/', getHome );

module.exports = router;