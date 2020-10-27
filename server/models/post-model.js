const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
    id : { type: String, required: true },
    userid : {type: Number, required: true },
    title : {type: String, require: true },
    body: {type: String, required: true}
});