const { MongoClient } = require("mongodb");

const db = {};
const MONGODB_URL = "mongodb+srv://trngtran358:notrana@cluster0.9xsmtvt.mongodb.net/?retryWrites=true&w=majority";
const DATABASE = "my-blog";

async function connectDb() {
  console.log("Connect to database successfully!!");
  const client = new MongoClient(MONGODB_URL);
  await client.connect();
  const database = client.db(DATABASE);

  db.posts = database.collection("posts");
  db.users = database.collection("users");
  db.comments = database.collection("comments");
  db.reactions = database.collection("reactions");
}

module.exports = { connectDb, db };