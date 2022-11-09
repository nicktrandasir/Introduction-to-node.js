const Application = require("./customFramework/Application")
const userRouter = require("./src/user/user-router")
const parseJson = require("./customFramework/parseJson")
const parseUrl = require("./customFramework/parseUrl")
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3300

const app = new Application();

app.use(parseUrl("http://localhost:3300"))
app.use(parseJson)
app.addRouter(userRouter)

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://test:1q2w3e@cluster0.gklla50.mongodb.net/?retryWrites=true&w=majority");
    app.listen(PORT, () => console.log(`Приложение запущено на ${PORT} порту`))
  } catch (e) {
    console.log(e)
  }
}

start();