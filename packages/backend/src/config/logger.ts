import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'cuba2887'},
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(), // Add colors to log messages in the console
                winston.format.simple()
            )
        }),
        new winston.transports.File({filename: 'error.log', level: 'error'})
    ]
})


process.on('uncaughtException', (error) => {
    logger.error(`Uncaught Exception: ${error}`);
    process.exit(1);
});

process.on('unhandledRejection', (error) => {
    logger.error(`Unhandled Rejection: ${error}`);
    process.exit(1)
});

export default logger;