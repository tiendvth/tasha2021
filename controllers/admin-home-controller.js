exports.getForm = function (req, res) {
    const data = {
        title : 'TASHA Store Admin | Form Example'
    }
    res.render('admin/home/form',{data : data,user:req.session.user});
}

exports.getTable = function (req, res) {
    const data = {
        title : 'TASHA Store Admin | Table Example'
    }
    res.render('admin/home/table',{data: data,user:req.session.user});
}
exports.home = function (req,res){
    const data = {
        title : 'TASHA Store Admin | Home'
    }
    res.render('admin/home/index',{data: data,user: req.session.user});
}
