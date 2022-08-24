const { AuthenticationError } = require("apollo-server-express");
const { User, Sphericle } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getAllUsers: async () => {
      const userData = await User.find({}).select("-__v -password");

      return userData;
    },
    getSingleSphericle: async (parent, { _id }, context) => {
      if (context.user) {
        const data = await Sphericle.findOne({ _id: _id }).select("-__v");
        return data;
        //^^^fixed the error with invalid token and being unauthorized ^
      }

      throw new AuthenticationError("Not logged in");
    },
    getByCategory: async (parent, { category }, context) => {
      if (context.user) {
        const categoryData = await Sphericle.find({
          category: category,
        }).select("-__v");

        return categoryData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    upvote: async (parent, { _id, voteCount }, context) => {
      if (context.user) {
        const updatedSphericle = await Sphericle.findOneandUpdate(
          { _id: _id },
          // this may not be the way to augment. Create separate function const?
          { voteCount: voteCount++ },
          { new: true }
        );
        return updatedSphericle;
      }

      throw new AuthenticationError("Not logged in");
    },
    downvote: async (parent, { _id, voteCount }, context) => {
      if (context.user) {
        const updatedSphericle = await Sphericle.findOneandUpdate(
          { _id: _id },
          { voteCount: voteCount-- },
          { new: true }
        );
        return updatedSphericle;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
