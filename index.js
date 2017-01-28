/*******************
  Robert Mennell
  <skatcat31@gmail.com>
  MIT
  A simple example of the simple express framework
  Really this is an autoloader built to work with expressJS for the express(heh) purpose of enforcing good coding habits
  It allows people to organize their code in such a way that makes it easier to organize
  This keeps your app compartmentalized and easier to traverse
  This helps enforce DRY coding habits
  It also lets you be lazy by not having to write the express boilerplate
*******************/

// Obviously you can't use something in NodeJS without either importing it or coding it yourself
const Simple = require('simpleexpress');

// The directory we want to load(safe for process managers)
// By passing __dirname I'm telling it to load this directory
const dirextory = __dirname

// Do we want it to do the shorcut for listening or are we going to pass it ot a server outselves
const listen = true;

// Now we just pass the app our stuff
// We could use this same setup to pass it to create multiple express apps
// This would allow us to link togethor several apps into one super server
// This means we can VERY easily create a HUGE internetworking of express apps as handlers
const app = new Simple(dirextory, listen);

// Ussually it's a good idea to export hte app so that other things can include this file and get a copy of it
module.exports = app;

// If you didn't start the application upon using the constructor
// then this would be the place you would want to tell it to listen
// unless you were going to use something else to do that
// like a websocket server
