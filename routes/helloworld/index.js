// Yeah this is a simple hellowrold example router
// All of the basics work here
const path = '/';
const router = new require('express').Router();
const hi = require(__dirname+'/hi');

function bye ( req, res, next )
{
  req.app.locals.plugins.logger();
  res.end('okay fine, ttyl...');
  next();
}

router.get(
  '',
  hi
)

router.get(
  /bye/,
  bye
);

module.exports = {
  path,
  router
}
