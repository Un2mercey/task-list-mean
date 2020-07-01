const unmerceydb = require('mongoose');
const { unmerceydb_key } = require('./keys/unmerceydb_key');

unmerceydb.Promise = global.Promise;

unmerceydb.connect(unmerceydb_key, { useNewUrlParser: true }) 
    .then(() => { console.log('\tConnect with MongoDB UnmerceyDB: succsessfully!'); })
    .catch((error) => { console.error(error); });

unmerceydb.set('useCreateIndex', true);
unmerceydb.set('useFindAndModify', false);

module.exports = { unmerceydb };
