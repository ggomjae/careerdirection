const userController = require('../../controllers/user');

const queries = {
    userList: userController.userList
};

const mutations = {
    // signup: userController.signup,
    // login: userController.login,
    // logout: userController.logout
}

module.exports = {
    queries,
    mutations
};