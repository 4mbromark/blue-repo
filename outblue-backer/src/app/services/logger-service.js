class LoggerService {

    static LOG_ROUTE = 'log-route';
    static LOG_SERVICE = 'log-service';

    static logger = true;

    static async isLoggerEnabled() {
        return LoggerService.logger;
    }

    static async log(log, from) {
        if (!LoggerService.isLoggerEnabled()) {
            return;
        }
        switch (from) {
            case LoggerService.LOG_ROUTE: {
                LoggerService.logRoute(log);
                break;
            }
            case LoggerService.LOG_SERVICE: {
                LoggerService.logService(log);
                break;
            }
        }
    }

    static async logRoute(log) {
        console.log('>> OUTBLUE ROUTE >> ' + log);        
    }

    static async logService(log) {
        console.log('>> OUTBLUE SERVICE >> ' + log);    
    }

    
}

module.exports = LoggerService;