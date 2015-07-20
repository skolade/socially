Package.describe({
    name: "socially:base-model",
    summary: "A model for all other models to inherit from ",
    version: "0.2.3",
    git: "https://github.com/copleykj/socially-base-model.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use(["meteor", "mongo", "underscore"]);

    api.use([
        "socially:server-time@0.1.1", "tmeasday:publish-with-relations@0.2.0", "aldeed:simple-schema@1.3.3",
        "aldeed:collection2@2.3.3", "matb33:collection-hooks@0.7.13", "meteorhacks:unblock@1.1.0"
    ]);

    api.imply(["meteor", "mongo", "underscore"]);

    api.imply([
        "tmeasday:publish-with-relations@0.2.0", "aldeed:simple-schema@1.3.3",
        "aldeed:collection2@2.3.3", "matb33:collection-hooks@0.7.13", "meteorhacks:unblock@1.1.0"
    ]);

    api.addFiles(["base-model.js", "security.js"]);

    api.export("BaseModel");
});

