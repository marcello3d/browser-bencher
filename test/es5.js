var runSuite = require('./shared')

suite('es5')

runSuite(require('es5-compat-table/data-es5'), test)