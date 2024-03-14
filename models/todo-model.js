const { DataTypes, Sequelize } = require("sequelize");

const mysql = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_PORT,
    dialect: "mysql",
    pool: { min: 0, max: 5 },
  }
);

const TodoSchema = mysql.define("Todo", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    validate: {
        len: {
            msg: "Name must be between 2 and 255 characters",
            args: [2, 255]
        }
    }
  },
  completed: {
    type: DataTypes.BOOLEAN,
    default: false,
  }
}, {
    indexes: [
        {fields: ['user_id']},
        {fields: ['user_id', 'completed']}
    ]
});

TodoSchema.sync();

module.exports = TodoSchema;
