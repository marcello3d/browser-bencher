var runSuite = require('./shared')

suite('non-standard')

runSuite(require('es5-compat-table/data-non-standard'), test)
