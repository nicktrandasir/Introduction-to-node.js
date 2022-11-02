const Router = require("./customFramework/Router")
const Application = require("./customFramework/Application")

const PORT = process.env.PORT || 3300

const router = new Router();
const app = new Application();

router.get("/users", (req, res) => {
  res.end("Данные с пользователями!")
})



app.addRouter(router)
app.listen(PORT, () => console.log(`Приложение запущено на ${PORT} порту`))

