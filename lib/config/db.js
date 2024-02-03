import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://lavanya415:Vd93qLlSkHbxXp7M@cluster0.vumnppo.mongodb.net/todo-app"
  );
  console.log("DB Connected");
};
