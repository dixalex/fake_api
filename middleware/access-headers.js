module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', ['*']);
    res.header('Access-Control-Expose-Headers', ['*']);
    console.log(res);
    next()
};