const Contact = require('../models/contact');
const Feedback = require('../models/feedback');
const Complaint = require('../models/register-complaint');
const alert = require('alert')
exports.saveContact = async function (req,res){
    let obj = new Contact(req.body);
    obj.status = 1;
    await obj.save();
    alert('Send Contact Success')
}
exports.saveFeedBack = async function (req,res){
    let obj = new Feedback(req.body);
    obj.status = 1;
    await obj.save();
    alert('Send Feedback Success');
}
exports.saveComplaint = async function (req,res){
    let obj = new Complaint(req.body);
    obj.status = 1;
    await obj.save();
    alert('Send Register Complaint Success');
}

