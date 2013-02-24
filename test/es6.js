var runSuite = require('./shared')

suite('es6')

runSuite(require('es5-compat-table/data-es6'), test)
