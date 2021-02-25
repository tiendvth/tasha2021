const User = require('../models/user');
const md5 = require('md5')
const alert = require('alert')
exports.store = async function (req, res) {
    let obj = new User(req.body);
    obj.creatAt = Date();
    obj.type = 1;
    obj.salt = Math.random().toString(36).substring(7);
    obj.password = md5(obj.password + obj.salt);
    await obj.save()
    alert('Register Success');
}
exports.detailUser = async function (req, res){
    const userDetail = await User.findById(req.params.id);
    const data = {
        userDetail: userDetail
    }
    res.render('profile',{data: data});
}
exports.editUser = async function (req,res){
    const userEdit = await User.findById(req.params.id);
    const data = {
        userEdit:userEdit
    }
    res.render('edit-profile',{data:data})
}
exports.update = async function(req,res){
    await User.findByIdAndUpdate(req.params.id,req.body);
    res.redirect('/');
}
exports.login = async function (req, res){
    const existAccount = await User.findOne({user: req.body.user});
    if(existAccount == null ){
        alert('Invalid Account!');
    }
    if(md5(req.body.password + existAccount.salt) == existAccount.password){
        req.session.user = existAccount;
        alert('Login Success');
        res.redirect('/')

    }else{
        alert('Invalid Account !');
    }
}
exports.logout =  function (req,res){
    req.session.user = undefined;
    res.redirect('/')
}