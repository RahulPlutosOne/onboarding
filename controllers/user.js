const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

exports.userSignup = async (req, res) => {
  let { username, email, pswd, isAdmin } = req.body;
  const hashedPassword = await bcrypt.hash(pswd, 10);
  const exist = await User.findOne({ where: { username: username } });
  if (exist) {
    return res.send("user already exists");
  }

  if (isAdmin === undefined) {
    isAdmin = false;
  }
  const user = await User.create({
    username: username,
    email: email,
    pswd: hashedPassword,
    isAdmin,
  });
  res.send(user);
};

exports.userSignin = async (req, res) => {
  const { email, pswd } = req.body;
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const passwordMatches = await bcrypt.compare(pswd, user.pswd);
  if (passwordMatches) {
    await user.update({ lastSeen: Date.now() });
    const JWT_SECRET_KEY = "SECRET_KEY";
    const token = jwt.sign({ email: user.email }, JWT_SECRET_KEY);
    return res.status(200).json({ data: token });
  }
  res.status(401).json({ message: "User not authorized" });
};

exports.changeUsername = async (req, res) => {
  const { email, new_username } = req.body;

  await User.update({ username: new_username }, { where: { email: email } });

  res.send("updated");
};

exports.changePassword = async (req, res) => {
  const { email, new_pswd } = req.body;

  const hashedPassword = await bcrypt.hash(new_pswd, 10);
  await User.update({ pswd: hashedPassword }, { where: { email: email } });
  const user = await User.findOne({ where: { email: email } });

  console.log(user);

  res.send("updated");
};
