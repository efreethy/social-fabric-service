'use strict';

var UUID = require('short-unique-id');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const ID_PREFIX = 'follow-'

module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
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
    follower_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'follower_id',
    },
    followed_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'followed_id',
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
    tableName: 'follows',
    timestamps: true,
    underscoredAll: true,
  });

  return Follow;
};