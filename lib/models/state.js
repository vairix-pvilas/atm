/**
 * Created by vairix on 6/4/14.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StateSchema = new Schema({
    name: String
});

mongoose.model('State', StateSchema);
