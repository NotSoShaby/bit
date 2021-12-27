

// run the commnad: docker run --name mongodb -d -p 27017:27017 mongo

import mongoose from "mongoose";
import { createUser, getUser } from "./user-comp";

mongoose.connect('mongodb://localhost:27017/mongo');



it('Should wait for a user to be created, and then get it', async () => {
  let testUserName = 'testUserName';
  let testUserEmail = 'test@email.com'
  let testUserPassword = '123TestPassword!'


  await createUser(testUserName, testUserEmail, testUserPassword);
  let user = await getUser(testUserName)
  expect(user.email).toBe(testUserEmail);
});
