const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config, env) {
    config.plugins.push(new NodePolyfillPlugin({
        excludeAliases: [
            "assert",
            "console",
            "constants",
            "domain",
            "punycode",
            "querystring",
            "string_decoder",
            "sys",
            "timers",
            "tty",
            "util",
            "vm",
            "zlib"
        ]
    }));
    return config;
};
