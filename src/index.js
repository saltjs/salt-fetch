var salt = window.salt = window.salt || {};
var nattyFetch = require('natty-fetch');
var nattyStorage = require('natty-storage');
salt.fetch = nattyFetch;
salt.storage = nattyStorage;

module.exports = {
    fetch: nattyFetch,
    storage: nattyStorage
};