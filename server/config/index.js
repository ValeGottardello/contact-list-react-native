require("dotenv").config() 

let missing = ["PORT", "DATABASE_URL"].filter(
  key => process.env[key] === undefined
)

if (missing.length > 0) {
  throw Error(`missing environment variables for ${missing.join(", ")}`)
}

module.exports = {
  port: process.env.PORT || 8080,
  db: {
    connectionString: process.env.DATABASE_URL,
  },
}
