// Register babel to transpile test code
require('babel-register')();

// Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {}
