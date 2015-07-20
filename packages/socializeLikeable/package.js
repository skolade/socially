Package.describe({
    name: "socially:likeable",
    summary: "A package implementing social \"liking\" or \"starring\"",
    version: "0.1.3",
    git: "https://github.com/copleykj/socially-likeable.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use("socially:linkable-model@0.2.1");

    api.imply("socially:linkable-model");

    //Add the friend-model files
    api.addFiles("common/likeable-model.js");
    api.addFiles("common/like-model.js");
    api.addFiles("server/server.js", "server");


    api.export(["LikeableModel", "Like"]);
});
