var UUID = require('short-unique-id');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const ID_PREFIX = 'comment-'

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
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
    commented_table: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'commented_table',
    },
    commented_foreign_key: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'commented_foreign_key',
    },
    commenter_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'commenter_id',
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
    tableName: 'comments',
    timestamps: true,
    underscoredAll: true,
  });

  return Comment;
};