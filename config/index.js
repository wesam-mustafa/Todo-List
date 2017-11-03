var configValues = require('./config');
module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname+':' + configValues.pass+ '@ds145275.mlab.com:45275/nodotododb';
    }
}