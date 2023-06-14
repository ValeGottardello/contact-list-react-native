require("dotenv").config() 

module.exports = {
  port: process.env.PORT || 8080,
  db: {
    connectionString: process.env.DATABASE_URL || "postgres://localhost:5432/contactsapp",
  },
}