const User = require("./user-model")

const getUsers = async (req, res) => {
  let users;
  if(req.params.id) {
    console.log("req params ------>", req.params)
    users = await User.findById(req.params.id)
  } else {
    users = await User.find()
  }
  res.send(users)
}

const addUser = async (req, res) => {
  if(req.body.id) {
    const user = await User.create(req.body);
    res.send(user);
  } else {
    res.end('add blya');
  }
}
const deleteUser = async (req, res) => {
  console.log("req--->", req.params.id)
  // console.log("res --->", res)

  if (req.params.id) {
    const users = await User.deleteOne({_id: req.params.id})
    res.send(users);
  } else {
   res.end("blya")
  }


}

module.exports = {
  getUsers,
  addUser,
  deleteUser
}