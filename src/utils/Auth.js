import decode from "jwt-decode";
import Jwt from "jsonwebtoken";

class AuthenticationTool {
  constructor() {
    super();
    this.duration = "5h";
    this.tripleSecret = "mysupersecret";
  }
  signToken(email) {
    const payLoad = email;
    return Jwt.sign({ data: payLoad }, this.tripleSecret, {
      expiresIn: this.duration,
    });
  }
  authMiddleware({ req }) {
    let token = req.body || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop.trim();

      if (!token) {
        return req;
      }
      try {
        const { data } = Jwt.verify(token, this.tripleSecret, {
          maxAge: this.duration,
        });
        req.user = data;
      } catch (e) {
        console.log("Invalid Token");
      }
    }
  }
}

export default new AuthenticationTool();
