import dotenv from 'dotenv'

// Load environment variables at the beginning
dotenv.config()

export const environment = {
  logLevel: process.env.LOG_LEVEL || 'info',
  port: process.env.PORT || 3000,
  validate() {
    if (!this.logLevel) {
      throw new Error('LOG_LEVEL is required')
    }
    if (!this.port) {
      throw new Error('PORT is required')
    }
  }
}

// Run validation immediately
environment.validate()
console.log("Environment variables loaded")

export default environment 