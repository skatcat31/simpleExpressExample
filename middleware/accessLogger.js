module.exports =
{
  // tells us what part is the middleware
  middleware: ( req, res, next ) =>
  {
    console.log('[' + req.method + ']' + req.path);
    next();
  },
  // before or after the routers
  before: true,
  after: true
};
