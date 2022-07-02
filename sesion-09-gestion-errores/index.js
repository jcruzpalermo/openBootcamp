const winston = require('winston');

const logger = winston.createLogger({
level: 'info',
format: winston.format.json(),
defaultMeta: { service: 'user-service' },
transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
],
});

function mostrarError() {
    throw new error("Ha sucedido algo incorrecto");
}
try {
    mostrarError();
} catch(e) {
    logger.log("error", e.toString());
}



//logger.log("Esto esta saliendo por pantalla");
logger.info("Esto es un mensaje informativo");
logger.debug("Esto es un mensaje de debug");
logger.warn("Esto es un mensaje de advertencia");
logger.error("Esto es un error");

