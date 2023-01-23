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
  login(token) {
    localStorage.setItem("id_token", token);
    window.location.assign("/");
  }
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
  getToken() {
    return localStorage.getItem("id_token");
  }
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      const isExpired = decoded.exp < Date.now() / 1000 ? true : false;
      return isExpired;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}

export default new AuthenticationTool();
