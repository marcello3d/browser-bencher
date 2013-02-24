var assert = require('assert')

module.exports = function(database, test) {
    for (var i=0; i<database.tests.length; i++) {
        (function(testSpec) {
            var fn = testSpec.exec
            if (typeof fn === "function") {
                test(testSpec.name.replace(/^<a href="(.+)">(.+)<\/a>$/, "$2 - $1"), function() {
                    assert.ok(fn(), "failed: "+fn.toString())
                })
            }
        })(database.tests[i])
    }
}
