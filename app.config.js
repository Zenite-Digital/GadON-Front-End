const dotenv = require("dotenv");
dotenv.config();

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      BACKEND_URL: process.env.BACKEND_URL,
    },
  };
};
