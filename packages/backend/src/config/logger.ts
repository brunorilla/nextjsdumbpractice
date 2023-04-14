import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'cuba2887'},
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'})
    ]
})


process.on('uncaughtException', (error) => {
    console.log("handling exception")
    logger.error(`Uncaught Exception: ${error}`);
    process.exit(1);
});

process.on('unhandledRejection', (error) => {
    console.log("handling exception")

    logger.error(`Unhandled Rejection: ${error}`);
    process.exit(1)
});

export default logger;