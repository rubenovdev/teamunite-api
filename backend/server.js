const app = require("./app");

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const insertProjects = require("./queries").insertProjects;
const findDocuments = require("./queries").findDocuments;

// Connection URL
// const url = process.env.MONGO_DB_ADDRESS
//   ? "mongodb://localhost:27017"
//   : process.env.MONGO_DB_ADDRESS;
// const url =
//   "mongodb+srv://Daria:12e9843Zi1iBipDye3ve6TUBv5@cluster0-8pzqh.mongodb.net/test?retryWrites=true&w=majority";

// // Database Name
// const dbName = "teamunite";

// // Create a new MongoClient
// const client = new MongoClient(url);

// Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   listDatabases(client);
// const db = client.db(dbName);

// findDocuments(db, function() {
//   client.close();
// });
// });

// const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://DariaPopova:12e9843Zi1iBipDye3ve6TUBv5@cluster0-8pzqh.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  console.log("Connected successfully to server");
  // const collection = client.db("teamunite").collection("projects");
  // findDocuments("projects", function() {
  client.close();
});
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
