const session = require('express-session');
const MemoryStore = require('memorystore')(session);

module.exports = () => (
  session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
    resave: false,
    secret: 'some secret',
  })
);
