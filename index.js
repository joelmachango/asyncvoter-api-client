var RestClient  = require('node-rest-client').Client;

var restClient  = new RestClient();

var client = function() {
 this.restClient = new RestClient();
 this.baseUrl = 'http://api-production.asyncvoter.agileventures.org';
 
 this.getAllStories = function(callback) {
    var url = this.baseUrl + '/stories';
    var args = [];
    this.restClient.get(url, args, function(data, response){
      if (response.statusCode == 200) {
        callback (null, data, response)
      } else {
        callback(new Error('There was and issue'));
      }
    });
 };
};

module.exports = client;