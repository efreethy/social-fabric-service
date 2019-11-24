var UUID = require('short-unique-id');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const ID_PREFIX = 'like-'

module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
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
    liker_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'liker_id',
    },
    liked_table: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'liked_table',
    },
    liked_foreign_key: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'liked_foreign_key',
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
    tableName: 'likes',
    timestamps: true,
    underscoredAll: true,
  });

  return Like;
};