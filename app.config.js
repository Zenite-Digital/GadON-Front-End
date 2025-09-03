const dotenv = require("dotenv");
dotenv.config();

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      EXPO_PUBLIC_BACKEND_URL: process.env.EXPO_PUBLIC_BACKEND_URL,
      eas: {
        projectId: process.env.PROJECT_ID,
      },
    },
  };
};
