'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./icons.cjs.production.min.js');
} else {
  module.exports = require('./icons.cjs.development.js');
}
