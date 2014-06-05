/**
 * Created by vairix on 6/4/14.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var ATMSchema = new Schema({
    name: String,
    address: String,
    acceptDeposits: Boolean,
    isMini: Boolean,
    state : [{ type: Types.ObjectId, ref: 'State' }]
});

mongoose.model('ATM', ATMSchema);
