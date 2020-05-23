require("dotenv").config();
require("./models").models.User.create({
  name: "Aku",
  email: "aku@kangas.io",
  password: "1234",
});

const session = require("express-session");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET || "keyboard cat";

// Session for auth! JWT done right is just hard..
const sess = {
  secret: SESSION_SECRET,
  cookie: {
    // set secure cookie if prod and trust first proxy,
    secure: app.get("env") === "production" && app.set("trust proxy", 1),
  },
};

app.use(session(sess));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("./routes"));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
