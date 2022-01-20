const request = require('request');
const fs = require('fs');
let args = process.argv.slice(2);
const passedURL = args[0];
const filePath = '/Users/chrisrose/lighthouse/w2/d3/page-fetcher/test.txt';

request(passedURL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(filePath, body, error => {
    if (error) {
      console.error(error);
      return;
    }
    //file written successfully
  });
});