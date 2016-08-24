var express = require('express');
var app = express();
autocomplete=require('./autocomplete');

app.use(express.static('public'));

app.get('/autocomplete/:search',autocomplete.find);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
