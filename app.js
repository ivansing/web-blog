const express = require("express");
const app = express();
const contactRoutes = require("./routes/contacts");
const todoRoutes = require("./routes/todos");
const userRoutes = require("./routes/users");
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS error handling
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
});

// Routes middlewares
app.use("/contacts", contactRoutes);
app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

// Error Handling
app.use((req, res, next) => {
  const error = new Error("Route not found.");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

module.exports = app;
