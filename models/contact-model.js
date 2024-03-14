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

  const ContactSchema = mysql.define('Contact', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    fname: {
        type: DataTypes.STRING(100),
    },
    lname: {
        type: DataTypes.STRING(100),
    },
    email: {
        type: DataTypes.STRING(150),
        validate: {
            isEmail: {msg: "Must be a valid email format"}
        }
    },
    phone: {
        type: DataTypes.STRING(55)
    }
   
  }, {
    indexes: [
        {fields: ['user_id']}
    ]
  })
  
  ContactSchema.sync()
  module.exports = ContactSchema;
  