module.exports = {
    "globals": {
        "window": true,
        "document": true,
        "foo" : true
    },
    "extends": "standard",
    "rules" : {
        "indent" : [
            "warn",
            2
        ],
        "semi" : [
            "error",
            "always"
        ],
        "no-unused-vars" : 1,
        "eol-last" : 0
    }
};