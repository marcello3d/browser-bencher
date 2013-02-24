var assert = require('assert')

module.exports = function(database, test) {
    database.tests.forEach(function (description) {
        var fn = description.exec
        if (typeof fn === "function") {
            test(description.name.replace(/^<a href="(.+)">(.+)<\/a>$/, "$2 - $1"), function() {
                assert.ok(fn(), "failed: "+fn.toString())
            })
        }
    })
}
