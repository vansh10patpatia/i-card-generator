const jwt = require("../utils/jwt");
const createError = require("http-errors");
const auth = async (req, res, next) => {
  if (!req.body.headers.Authorization) {
    throw createError.BadRequest("headersUnavailable");
    // return next(createError.Unauthorized("Access token is required"));
  }
  const token = req.body.headers.Authorization.split(" ")[1];
  if (!token) {
    throw createError.BadRequest("invalidToken");
    // return next(createError.Unauthorized("Access token is required"));
  }
  await jwt
    .verifyAccessToken(token)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(e => {
      return createError.Unauthorized(e.message);
    });
};
module.exports = auth;
