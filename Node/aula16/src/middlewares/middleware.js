exports.middlewareGlobal = (req, res, next) => {
    // res.local.umaVariavelLocal = 'Este é o valor da variável local'
    next();
}