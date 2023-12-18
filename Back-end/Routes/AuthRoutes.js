const { register, login } = require('../Controllers/AuthControllers');

const router = require('express').Router();

router.post("/login", login);
router.post("/register", register);
router.post("/login", login);

module.exports = router;