import mongoose from "mongoose";
import { PassThrough } from "stream";




mongoose.connect('mongodb://localhost:27017/mongo');



interface User {
  username: string;
  email: string;
  password: string
}


const schema = new mongoose.Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});


const UserModel = mongoose.model<User>('User', schema);

export async function createUser(username:string, email:string, password: string): Promise<void> {

  const doc = new UserModel({
    username: username,
    email: email,
    password: password,
  });
  await doc.save();
}


export async function getUser(username:string): Promise<User> {

  return UserModel.findOne({ username: username }).exec()
}
