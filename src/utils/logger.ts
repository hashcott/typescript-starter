import pino from 'pino'
import { environment } from '../config/environment'

const logger = pino({
  level: environment.logLevel,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname'
    }
  }
})

export default logger

