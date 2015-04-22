Package.describe({
  name: 'art1sec8:sentiment',
  version: '0.0.1',
  summary: 'AFINN-based sentiment analysis - a ' +
  'meteor wrap around npm sentiment',
  git: 'https://github.com/Art1Sec8/sentiment',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('sentiment-server.js', ['server']);
  api.addFiles('sentiment-client.js', ['client']);
  api.use('underscore');
  api.export('sentiment');
});

Npm.depends({
  'extend-object': '1.0.0',
  'sentiment': '1.0.2'
});
