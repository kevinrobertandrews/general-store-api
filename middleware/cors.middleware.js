const cors = require("cors");

module.exports = function useCors() {
  console.log(process.env.NODE_ENV);

  // if in production, only accept requests from the production frontend
  if (process.env.NODE_ENV == "production") {
    return cors({
      origin: process.env.FRONTEND_HOST,
    });
  }

  // otherwise, accept any request
  return cors();
};
