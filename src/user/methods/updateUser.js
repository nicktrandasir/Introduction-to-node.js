const User = require("../user-model");

const updateUser = async (req, res) => {
  if (req.body._id) {
    const filter = {_id: req.body._id}
    const update = {...req.body }
    const users = await User.findOneAndUpdate(filter, update, {
      returnOriginal: false
    })
    res.send(users);
  } else {
    res.end("update blya")
  }
}
module.exports = updateUser;