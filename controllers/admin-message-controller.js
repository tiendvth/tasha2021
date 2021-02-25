const Contact = require('../models/contact');
const Feedback = require('../models/feedback');
const Complaint = require('../models/register-complaint');
exports.Contact = async function (req,res){
    const listContacts = await Contact.find({status: 1});
    const data = {
        listContacts: listContacts,
        title : 'TASHA Store Admin | List Contacts'
    }
    res.render('admin/contact/list',{
        data: data,
        user: req.session.user
    });
};
exports.Feedback = async function (req,res){
    const listFeedback = await Feedback.find({status: 1});
    const data = {
        listFeedback: listFeedback,
        title : 'TASHA Store Admin | List FeedBack'
    }
    res.render('admin/feedback/list',{
        data: data,
        user: req.session.user
    });
};
exports.Complaint = async function (req,res){
    const listComplaint = await Complaint.find({status: 1});
    const data = {
        listComplaint: listComplaint,
        title : 'TASHA Store Admin | List Complaints'
    }
    res.render('admin/complaint/list',{
        data: data,
        user: req.session.user
    });
};
exports.detailComplaint = async function (req,res){
    const detailComplaints = await Complaint.findById(req.params.id);
    const data = {
        detailComplaints: detailComplaints,
        title : 'TASHA Store Admin | Complaint Detail'
    };
    res.render('admin/complaint/detail',{data: data, user:req.session.user});
}
exports.deleteContact = async function (req,res){
    const updateInfor = {
        status: -1
    }
    await Contact.findByIdAndUpdate(req.params.id,updateInfor);
    res.redirect('/admin/message/contact')
}
exports.deleteFeedback = async function (req,res){
    const updateInfor = {
        status: -1
    }
    await Feedback.findByIdAndUpdate(req.params.id,updateInfor);
    res.redirect('/admin/message/feedback')
}
exports.deleteComplaint = async function (req,res){
    const updateInfor = {
        status: -1
    }
    await Complaint.findByIdAndUpdate(req.params.id,updateInfor);
    res.redirect('/admin/message/complaint');
}