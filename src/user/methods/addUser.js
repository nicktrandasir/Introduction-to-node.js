const User = require("../user-model");
const addUser = async (req, res) => {
  if (req.body.id) {
    const user = await User.create(req.body);
    res.send(user);
  } else {
    res.end('add blya');
  }
}
module.exports = addUser;