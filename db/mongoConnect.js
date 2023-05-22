const mongoose = require('mongoose');
const {config} = require('../config/secrets')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${config.MONGO_NAME}:${config.MONGO_PASS}@cluster0.bytvkoz.mongodb.net/nodejs_toys`);
  console.log("mongo connected");
}