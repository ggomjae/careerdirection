const userService = require('../services/user');

const userList = (req, res) => {
  console.log("Controller")
  userService.userList(req)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    });
}

module.exports = {
  userList
}