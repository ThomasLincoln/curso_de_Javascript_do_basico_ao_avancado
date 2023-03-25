export default (req, res, next) => {
  res.send(console.log(req.body));
  return next;
};
