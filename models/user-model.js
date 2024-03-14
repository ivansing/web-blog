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

  const UserSchema = mysql.define('User', {
    fname: {
        type: DataTypes.STRING(100),
    },
    lname: {
        type: DataTypes.STRING(100),
    },
    email: {
        type: DataTypes.STRING(150),
        unique: true, 
        validate: {
            isEmail: {msg: "Must be a valid email format"}
        }
    },
    password: {
        type: DataTypes.STRING(75),
        validate: {
            len: {
                msg: "Password must be at least 8 characters",
                args: [8, 255]
            }
        }
    }
  }, {
    indexes: [
        {fields: ['email']}
    ]
  })
  
  UserSchema.sync()
  module.exports = UserSchema;
  