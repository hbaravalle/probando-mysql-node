const userController = {
  getAllUsers: function (req, res) {
    res.send("Esta es la página de usuarios");
  },
  getUser: function (req, res) {
    res.send("Hola! Sos el usuario " + req.params.id);
  },
};

module.exports = userController;
