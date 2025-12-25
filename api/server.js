// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

// Load MongoDB URI from .env
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let contactCollection;

// Connect to MongoDB and start server
async function startServer() {
  try {
    await client.connect();
    console.log("✅ MongoDB connected successfully");

    const db = client.db("mydatabase");
    contactCollection = db.collection("contacts");

    // GET / - test server
    app.get("/", (req, res) => {
      res.send("✅ Backend is running!");
    });

    // GET /contacts - list all messages
    app.get("/contacts", async (req, res) => {
      try {
        const contacts = await contactCollection.find({}).toArray();
        res.json(contacts);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Database error" });
      }
    });

    // POST /contact - save new message
    app.post("/contact", async (req, res) => {
      const { name, email, phone, message } = req.body;

      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      try {
        await contactCollection.insertOne({
          name,
          email,
          phone,
          message,
          createdAt: new Date(),
        });
        res.json({ message: "Message saved successfully!" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Database error" });
      }
    });

    // Start server
    app.listen(5000, () => {
      console.log("🚀 Backend running at http://localhost:5000");
    });

  } catch (error) {
    console.error("❌ Connection error:", error);
  }
}

startServer();
