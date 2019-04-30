var redis = require('redis');
var client = redis.createClient();

client.on('connect', function () {
    console.log('connected');
});

//String
// client.set('total', '1800');
//Expire expirar chave depois de 10s
//client.expire('total', 10);

//Hash O hash permite você adicionar mais de um valor dentro de uma chave, no exemplo abaixo, eu criei uma chave com o nome languages e adicionei alguns idiomas nela.
//client.hmset('languages', 'portugues', 'ingles', 'espanhol', 'alemao');

//Ler Hash
client.hgetall('languages', function (err, object) {
    console.log(object);
});

//Lists
//client.rpush(['frameworks', 'angular', 'react', 'vue'], function (err, reply) {
//   console.log(reply);
//});

//DEL deletar registro
//client.del('frameworks', function(err, reply) {
 //   console.log(reply);
//});

//Ler List
client.lrange('frameworks', 0, -1, function (err, reply) {
    console.log(reply);
});

//Sets
//client.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
//    console.log(reply);
//});

//Ler sets
client.smembers('tags', function (err, reply) {
    console.log(reply);
});

//Del e Expire
