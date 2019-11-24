var UUID = require('short-unique-id');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const ID_PREFIX = 'post-'

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: 'id',
      defaultValue: () => {
        var uid = new UUID();
        return `${ID_PREFIX+uid.randomUUID(12)}`
      },
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'body',
    },
    photoUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      field: 'photo_urls',
    },
    videoUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      field: 'video_urls',
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  }, {
    tableName: 'posts',
    timestamps: true,
    underscoredAll: true,
  });

  return Post;
};