const checkAdmin = function (req, res, next) {
    let canContinue = false;
    const User = req.session.user;
    if (User && User.type == 2) {
        canContinue = true;
    }
    if (!canContinue) {
        res.redirect('/403')

    } else {
        next();
    }
};
module.exports = checkAdmin;