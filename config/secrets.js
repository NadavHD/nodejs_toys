require("dotenv").config()
exports.config = {
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  MONGO_NAME: process.env.MONGO_NAME,
  MONGO_PASS: process.env.MONGO_PASS
}