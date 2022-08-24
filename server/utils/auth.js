const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "notsosecret";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    // console.log(req.headers.authorization);
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    // console.log(token);
    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration }); // this is failing to validate the token
      req.user = data;
    } catch (err) {
      // console.log({ err });
      console.log("Invalid token");
    }

    // send to next endpoint
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
