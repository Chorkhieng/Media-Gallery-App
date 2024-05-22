const express = require('express');
const userControllers = require('../controllers/users_controllers');


const router = express.Router();


router.get('/', userControllers.getUsers);

router.post('/signup', userControllers.signup);

router.post('/login', userControllers.login);


// export 
module.exports = router;