Package.describe({
    name: "socially:user-profile",
    summary: "An extensible model for a users profile",
    version: "0.1.5",
    git: "https://github.com/copleykj/socially-user-profile.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use([
        "socially:user-model@0.1.4"
    ]);

    api.addFiles(["common/profile-model.js", "common/user-extensions.js"]);
    api.addFiles(["server/server.js", "server/publications.js"], "server");

    api.export("Profile");
});
