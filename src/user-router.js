const Router = require("./../customFramework/Router")
const controller = require("./user-controller")

const router = new Router();


router.get("/users", controller.getUsers)
router.post("/users", controller.addUser)

module.exports = router