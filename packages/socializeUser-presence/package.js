Package.describe({
    name: 'socially:user-presence',
    summary: 'Scalable user presence',
    version: '0.2.1',
    git: 'https://github.com/copleykj/socialize-user-presence.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.2.1');
    api.use(['mongo', 'underscore']);
    api.use(['socially:server-presence@0.1.0', 'socially:user-model@0.1.4']);

    api.addFiles('common/collection.js');

    api.addFiles(['server/publications.js', 'server/user-presence.js', 'server/server.js'], 'server');

    api.export('UserPresence', 'server');
});
