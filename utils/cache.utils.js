// const KeyvRedis  = require('keyv/redis');
const Keyv = require('keyv')
// const keyv =  Keyv();
// const keyvRedis = new KeyvRedis('redis://user:pass@localhost:6379');

const keyv = new Keyv();

exports.set = (key, value, ttl = undefined) => keyv.set(key, value, ttl);

exports.get = (key) => keyv.get(key); 

exports.del = (key) => keyv.delete(key);

exports.clear = () => keyv.clear();