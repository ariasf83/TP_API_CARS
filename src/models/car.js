const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    brand : {
        type: String,
        require: true
    },
    model : {
        type: String,
        require: true
    },
    year : {
        type : Number,
        require:true
    },
    engine: {
        type : Number,
        require : true
    },
    color: {
        type: String,
        require:true
    }
    });
    
    module.exports= mongoose.model('car',carSchema);