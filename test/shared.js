var assert = require('assert')

module.exports = function(database, test) {
    for (var i=0; i<database.tests.length; i++) {
        var testSpec = database.tests[i]
        var fn = testSpec.exec
        if (typeof fn === "function") {
            test(testSpec.name.replace(/^<a href="(.+)">(.+)<\/a>$/, "$2 - $1"), function() {
                throw "failed: "+fn.toString().replace(/\n/g, ' ')
            })
        }
    }
}
