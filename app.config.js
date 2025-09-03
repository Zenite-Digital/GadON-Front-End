const dotenv = require("dotenv");
dotenv.config();

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      BACKEND_URL: process.env.BACKEND_URL,
      eas: {
        projectId: process.env.PROJECT_ID,
      },
    },
  };
};
