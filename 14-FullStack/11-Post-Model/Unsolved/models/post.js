"use strict";

module.exports = (sequelize, DataTypes) => {
  const maxChar = 160;
  const Post = sequelize.define("post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, maxChar] }
    },
    body: { type: DataTypes.TEXT, allowNull: false, validate: { min: 1 } },

    category: { type: DataTypes.STRING, defaultValue: "Personal" }
  });
  return Post;
};
