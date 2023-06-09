const router = require("express").Router();
const authControllder = require("../controllers/authController");
const authCheck = require("../middlewares/auth");

router.post("/login", authControllder.login);
router.post("/register", authControllder.signup);
router.post("/refresh-token", authControllder.refreshToken);
router.post("/logout", authCheck, authControllder.logout);
router.post("/send-reset-password-email", authControllder.sendResPassEmail);
router.put("/reset-password", authControllder.reSetPassword);
router.get("/role/:code", authControllder.getRole);

module.exports = router;
