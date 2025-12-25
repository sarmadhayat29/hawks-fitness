const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI; // environment variable from Vercel

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let cachedClient = null;
let contactCollection = null;

async function connectDB() {
  if (cachedClient) return;
  await client.connect();
  cachedClient = client;
  const db = client.db("mydatabase");
  contactCollection = db.collection("contacts");
}

app.post("/api/contact", async (req, res) => {
  try {
    await connectDB();
    const { name, email, phone, message } = req.body;
    await contactCollection.insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });
    res.json({ message: "Message saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

module.exports = app; // Vercel requires exporting the app
