const moment = require('moment');

function formatMessage(username, text) {
    return {
        username,
        text,
        // h:mm a means hour minute am
        time: moment().format('h:mm a')
    };
}

module.exports = formatMessage;