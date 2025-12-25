const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let contactCollection;

async function startServer() {
  try {
    // ✅ Connect to MongoDB
    await client.connect();
    console.log("✅ MongoDB connected successfully");

    // Use database & collection
    const db = client.db("mydatabase");
    contactCollection = db.collection("contacts");

    // ✅ API to receive form data
    app.post("/contact", async (req, res) => {
      try {
        const { name, email, phone, message } = req.body;

        await contactCollection.insertOne({
          name,
          email,
          phone,
          message,
          createdAt: new Date(),
        });

        res.json({ message: "Message saved successfully!" });
      } catch (err) {
        res.status(500).json({ message: "Database error" });
      }
    });

    // ✅ Start server
    app.listen(5000, () => {
      console.log("🚀 Backend running on http://localhost:5000");
    });

  } catch (error) {
    console.log("❌ Connection error:", error);
  }
}

startServer();
