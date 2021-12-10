const { check } = require('express-validator');

const ValidationsGames = {
    createGame:[
        check('name','The name is required').not().isEmpty(),
        check('description','The description is required').not().isEmpty(),
        check('genres','The genres is required').not().isEmpty(),
        check('platforms','The platforms is required').not().isEmpty(),
    ]
};

module.exports = ValidationsGames;
