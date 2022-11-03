const mongoose = require("mongoose");

const connectDB = async (URL) => {
  try {
    await mongoose.connect(
      URL,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        autoIndex: true,
      },
      () => {
        console.log("MongoDB connected...");
      }
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
