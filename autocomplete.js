var mongo = require('mongodb');

var Server = mongo.Server,
        Db = mongo.Db,
        BSON = mongo.BSONPure;


var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('inesh-test-shopback', server);
db.open(function(err, db) {
    if (!err) {
        console.log("Connected to 'inesh-test-shopback' database");
    }else{
        console.log(err);
    }
});

exports.find = function(req, res) {
var b=req.params.search;
console.log(b);
db.collection('books', function(err, collection) {
        collection.find({$text: { $search: b } }).limit(5).toArray(function(err, items) {
                res.jsonp(items);
                console.log(items);
                console.log(err);
            });
        });
};




