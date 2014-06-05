/**
 * Created by vairix on 6/4/14.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ATMSchema = new Schema({
    name: String,
    address: String,
    acceptDeposits: Boolean,
    isMini: Boolean
});

mongoose.model('ATM', ATMSchema);
