const mongoose = require('mongoose');

const TmkSchema = mongoose.Schema({
    state: String,
    detalNum: String,
    height: String,
    step: String,
    kone: String,
    angel: String
});

const Tmk = mongoose.model('Tmk', TmkSchema);

module.exports = Tmk;

module.exports.addEntry = function(newEntry, callback){
    newEntry.save(callback);
}