exports.isOwner = (res,req, next)=>{
    if (req.user._id == req.params.creatorId) {
        return true;
    }
    else return false;
    next();
}