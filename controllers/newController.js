exports.renderForm = (req, res) => {
  res.render("new", { title: "new user" });
};

exports.addUser = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
