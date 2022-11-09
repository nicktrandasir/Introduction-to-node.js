const User = require("../user-model");
const deleteUser = async (req, res) => {
  if (req.params.id) {
    const users = await User.deleteOne({_id: req.params.id})
    res.send(users);
  } else {
    res.end("delete blya")
  }
}
module.exports = deleteUser;