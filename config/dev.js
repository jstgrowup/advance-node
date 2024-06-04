require("dotenv").config();

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,

  googleClientSecret: "8mkniDQOqacXtlRD3gA4n2az",
  mongoURI: process.env.MONGO_URI,
  cookieKey: "123123123",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
};
