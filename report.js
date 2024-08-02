const newman = require('newman');
require('dotenv').config();

const collectionUrl = `https://api.postman.com/collections/37031452-ba4b5cb5-4002-47e6-89dc-33192f1021e2?access_key=${process.env.ACCESS_KEY}`;

newman.run({
    //collection: require('./collection/dmoney.json'),
    collection: collectionUrl,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
