import mongoose from "mongoose";

// 🔹 Your connection string
const MONGO_URI = "mongodb://localhost:27017/MERN_JOB_SEEKING_WEBAPP";

// Connect to DB



export function DB(){
    mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to DB:", mongoose.connection.name))
  .catch((err) => console.log("❌ Connection error:", err.message));

}
// Access existing collection
// const collectionName = "applications"; // exact name in MongoDB
// const Application = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);

// // Fetch all documents
// async function getAllApplications() {
//   try {
//     const data = await Application.find(); // gets all documents
//     console.log("📂 All Documents:", data);
//   } catch (err) {
//     console.log("❌ Error:", err.message);
//   }
// }

// getAllApplications();