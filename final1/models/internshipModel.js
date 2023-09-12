
const mongoose = require("mongoose");

const internshipModel = new mongoose.Schema({
    students :[ { type: mongoose.Schema.Types.ObjectId, ref: 'students' } ],
    employe : { type: mongoose.Schema.Types.ObjectId, ref: 'employe' },
    profile:{
        type:String,
        required:[true,"Please enter profile name"],
        min:[3,"Profile name cannot be less than 3 characters"],
    },
    skill:String,
    internshiptype:{
        type:String,
       enum:["In office","Remote"],
    },
    openings :Number,
    from:String,
    to:String,
    duration:String,
    responsibility:String,  
    stipend:{
        status:{
            type:String,
            enum:["Fixed","Negotiable","Performance Based","Unpaid"],
        },
        amount:Number,

    },
    perks:String,
    assessments:String,

},{timestamps:true});

const Internship = mongoose.model("internship",internshipModel);

module.exports = Internship;