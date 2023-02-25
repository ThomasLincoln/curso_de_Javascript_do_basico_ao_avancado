exports.middlewareGlobal = (req, res, next) => {
    // res.local.umaVariavelLocal = 'Este é o valor da variável local'
    next();
}

exports.checkCSRFError = (err, req, res, next) =>{
    if(err && err.code == 'EBADCSRFTOKEN'){
        return res.render('404');
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}