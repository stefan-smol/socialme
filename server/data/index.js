import mongoose from "mongoose";

const userIds = [new mongoose.Types.ObjectId()];

export const users = [
  {
    _id: userIds[0],
    firstName: "Bill",
    lastName: "Bob",
    email: "billbob@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p1.jpeg",
    friends: [],
    location: "New York, NY",
    occupation: "Software Engineer",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Bill",
    lastName: "Bob",
    location: "New York, CA",
    description: "random description",
    picturePath: "post1.jpeg",
    userPicturePath: "p1.jpeg",
    likes: new Map([[userIds[0], true]]),
    comments: ["random comment", "another random comment"],
  },
];
