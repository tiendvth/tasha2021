const Article = require('../models/article');

exports.getList = async function (req,res){
   const listArticle =  await Article.find({status: 1});
   const data = {
       listArticle: listArticle,
       title : 'TASHA Store Admin | List Articles'
   }
   res.render('admin/article/list',{data: data, user: req.session.user});
}
exports.create = function (req,res){
    const data = {
        title : 'TASHA Store Admin | Add Article'
    }
    res.render('admin/article/form',{data : data,user: req.session.user});
}
exports.store = async function (req,res){
    let obj = new Article(req.body);
    await obj.save();
    res.redirect('/admin/article/list');
}
exports.getDetail = async function (req, res) {
    const articleDetail = await Article.findById(req.params.id);
    const data = {
        articleDetail : articleDetail,
        title : 'TASHA Store Admin | Article Detail'
    }
    res.render('admin/article/detail', {data: data, user: req.session.user});
}

exports.edit = async function (req, res) {
    const articleEdit = await Article.findById(req.params.id);
    const data = {
        articleEdit: articleEdit,
        title : 'TASHA Store Admin | Article Edit'
    }
    res.render('admin/article/edit', {data: data, user: req.session.user});

}

exports.update = async function (req, res) {
    await Article.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin/article/list');

}
exports.deleteMaKhongDelete = async function (req, res) {
    let updateInfor = {
        status: -1
    }
    await Article.findByIdAndUpdate(req.params.id, updateInfor);
    res.redirect('/admin/article/list');
}
