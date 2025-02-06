import logger from './utils/logger.js'

async function main() {
  try {
    logger.info('Application starting...')
    // Your Facebook Ad Account code will go here
  } catch (error) {
    logger.error('Application failed to start:', error)
    process.exit(1)
  }
}

main()
