require("dotenv").config();
const express = require("express")
const router = express.Router();
const { magic } = require("../lib/magic");
const jwt = require("jsonwebtoken");
const { removeTokenCookie, setTokenCookie } = require("../lib/cookie")

let issuers = [];

router.post("/login", async (req, res) => {
  try {
    // const email = req.body.email
    const didToken = req.headers.authorization.substr(7);
    magic.token.validate(didToken);
    const metadata = await magic.users.getMetadataByToken(didToken);

    const index = issuers.indexOf(metadata.issuer);
    let queue = null;
    if (index < 0 ) {
      issuers.push(metadata.issuer);
      queue = issuers.length
    } else {
      queue = index + 1;
    }

    const user = {
      ...req.body,
      ...metadata,
      queue,
    }

    // jwt
    let token = jwt.sign(
      {
        ...user,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
      },
      process.env.JWT_SECRET
    );
    setTokenCookie(res, token);
    res.status(200).json({ authorized: true, user });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: error.message });
  }
})

router.get("/", async (req, res) => {
  try {
    let token = req.cookies.token;
    let user = jwt.verify(token, process.env.JWT_SECRET);
    console.log("user")
    console.log(user)

    res.status(200).json({ user });
  } catch (err) {
    res.status(200).json({ user: null });
  }
})

router.get("/logout", async (req, res) => {
  try {
    if (!req.cookies.token) return res.status(401).json({ message: "User is not logged in" });
    let token = req.cookies.token;
    let user = jwt.verify(token, process.env.JWT_SECRET);
    await magic.users.logoutByIssuer(user.issuer);
    removeTokenCookie(res);
    res.end()
  } catch (err) {
    res.status(401).json({ message: "User is not logged in" });
  }
})

module.exports = router;