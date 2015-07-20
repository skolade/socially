Package.describe({
    name: "socially:commentable",
    summary: "A package for implementing social commenting",
    version: "0.1.1",
    git: "https://github.com/copleykj/socially-commentable.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use("socially:likeable@0.1.3");

    api.imply("socially:likeable");

    api.addFiles("common/commentable-model.js");
    api.addFiles("common/comment-model.js");
    api.addFiles("server/server.js", "server");


    api.export(["CommentableModel", "Comment"]);
});
