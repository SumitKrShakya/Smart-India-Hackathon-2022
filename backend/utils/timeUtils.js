const moment = require("moment");

const calculateDateDiff = (startTime,endTime) => {
    let startTimeMoment = moment(startTime);
    let endTimeMoment = moment(endTime);
    let duration = moment.duration(endTimeMoment.diff(startTimeMoment));
    let seconds = duration.asSeconds();
    console.log(seconds);
    return seconds;
}
module.exports = {
    calculateDateDiff
}