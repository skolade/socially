Package.describe({
	name: 'jkolade:mmdl',
	version: '1.0.0',
	// Brief, one-line summary of the package.
	summary: 'A wrapper package for Google\'s Material Design Lite.',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/skolade/meteor-mdl.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.1.0.2');

	// Add content to head.

	api.addFiles([
		'material.css',
		'material.blue-red.min.css',
		'material.js'
	], 'client');
	api.export([
		"componentHandler",
		"MDl"
	], 'client');
	// Patchers.
});

Package.onTest(function (api) {
	api.use('tinytest');
	api.use('jquery');
	api.use('jkolade:mdl');

});
