var salt = window.salt = window.salt || {};
salt.fetch = require('natty-fetch');
salt.storage = require('natty-storage');

module.exports = {
    fetch: fetch,
    storage: storage
};