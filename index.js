const express = require("express");
const sequelize = require("./util/database");
const user = require("./routes/user");
const voucher = require("./routes/voucher");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", user);
app.use("/vouchers", voucher);

app.get("/", async (req, res) => {
  res.send("hello");
});

sequelize
  .sync()
  .then(() => {
    app.listen(3000, function () {
      console.log("Example app listening on port 3000!");
    });
  })
  .catch((err) => console.log(err));
