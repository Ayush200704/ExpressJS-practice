const authorize = (req, res, next) => {
    const {name} = req.query;
    if(name ==='john'){
        req.user = {name : 'john', id : 3};
    }
    else{
        return res.status(401).send("unauthorize")
    }
    next();
}

module.exports = authorize;