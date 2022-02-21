const router = require("express").Router();
const user = require("../controllers/auth.controller");

router.post("/register", user.all);
router.post("/login", user.login);


module.exports = router;
