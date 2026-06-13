import mongoose  from "mongoose";


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_CONNECTION);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

