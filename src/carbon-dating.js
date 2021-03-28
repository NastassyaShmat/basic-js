const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693;

module.exports = function dateSample(sampleActivity = null) {
    if (typeof sampleActivity === 'string' && (Number(sampleActivity) > 0 || sampleActivity.split('.').length > 2)) {
        let k = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity.split('.').slice(0, 2).join('.')) / (K / HALF_LIFE_PERIOD));
        return k > 0 ? k : false;
    }
    return false;
};
