module.exports = ( req, res, next ) =>
{
  res.end('HELLO BUDDY!');
  next();
}
