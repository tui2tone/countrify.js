var fs = require('fs');
var _ = require('lodash');
var json = require('./countries.json');

var data = {}

_.forEach(json, function(item) {
  data[item.cca2] = {
    cca2: item.cca2,
    cca3: item.cca3,
    name: {

    },
    locale: {
      code: "",
      short: "",
      name: {}
    },
    currency: {
      code: item.currency,
      symbol: "",
      name: {

      }
    }
  }
});

fs.writeFile("data/countries.json", JSON.stringify(data), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

// "en": {
//             "common": "Afghanistan",
//             "official": "Islamic Republic of Afghanistan"
//         },
//         "th": "สาธารณรัฐอิสลามอัฟกานิสถาน",
//         "currency": "AFN"