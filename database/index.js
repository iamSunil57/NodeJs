const mongoose = require("mongoose");

//Database connection string:
const ConnectionString =
  "mongodb+srv://sunil:sunil@cluster0.tlabfa4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function ConnectToDatabase() {
  await mongoose.connect(ConnectionString);
  console.log("Connected to database successfully");
}
module.exports = ConnectToDatabase;
