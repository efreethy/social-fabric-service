'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('follows', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      follower_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      followed_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
        return queryInterface.createTable('posts', {
          id: {
            primaryKey: true,
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          body: {
             type: Sequelize.STRING,
          },
          photo_urls: {
             type: Sequelize.ARRAY(Sequelize.STRING),
          },
          video_urls: {
              type: Sequelize.ARRAY(Sequelize.STRING)
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });

    }).then(() => {
        return queryInterface.createTable('likes', {
          id: {
            primaryKey: true,
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          liked_table: {
            type: Sequelize.STRING,
            allowNull: false
            },
          liked_id: {
            type: Sequelize.STRING,
            allowNull: false
          },
          liker_id: {
            type: Sequelize.STRING,
            allowNull: false
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });

    }).then(() => {
        return queryInterface.createTable('comments', {
          id: {
            primaryKey: true,
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          commented_table: {
            type: Sequelize.STRING,
            allowNull: false
            },
          commented_id: {
            type: Sequelize.STRING,
            allowNull: false
          },
          commenter_id: {
            type: Sequelize.STRING,
            allowNull: false
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('follows').then(() => {
        queryInterface.dropTable('posts')
    }).then(queryInterface.dropTable('likes')).then(queryInterface.dropTable('comments'))
  }
};
