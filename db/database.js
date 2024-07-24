const mongoose = require("mongoose");
let isConnected = false;
const ConnectToDatabase = async () => {
    if (isConnected) {
        console.log("Mongodb already connected");
        return;
    }
    try {
    await mongoose.connect(process.env.MONGODB_URI,
      {
        dbName: "Coding_Raja_Technology",
      }
    );
    console.log("Mongodb Connected Successfully");
    isConnected = true;
  } catch (e) {
    console.log(e)
    console.log("Mongodb Connection error");
  }
};
export default ConnectToDatabase;
