module.exports = (req, res, next) => {
    console.log();
    console.log('passei no midware global');
    console.log();
    next();
}