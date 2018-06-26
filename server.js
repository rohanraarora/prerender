#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
  logRequests: true,
  pageLoadTimeout: 5 * 60 * 1000,
  waitAfterLastRequest: 1000
});


server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.use(require('prerender-memory-cache'))

server.start();
