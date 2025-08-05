const mongoose = require("mongoose");
//mongoose.connect return a promise so we put in the async await
const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb://localhost:27017/dev_community"
  );
};
module.exports = { ConnectDB };
