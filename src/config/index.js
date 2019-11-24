const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];
console.log('CONFIG: ', config);
export default config;