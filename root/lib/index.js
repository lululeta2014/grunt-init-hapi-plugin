// Declare internals

var internals = {};

// Defaults

internals.defaults = {};

exports.register = function (plugin, options, next) {

    {% if (route_permission !== 'n') { %}plugin.hapi.utils.assert(typeof plugin.route === 'function', 'Plugin permissions must allow route');{% } %}
    {% if (state_permission !== 'n') { %}plugin.hapi.utils.assert(typeof plugin.state === 'function', 'Plugin permissions must allow state');{% } %}
    {% if (helper_permission !== 'n') { %}plugin.hapi.utils.assert(typeof plugin.helper === 'function', 'Plugin permissions must allow helper');{% } %}
    {% if (events_permission !== 'n') { %}plugin.hapi.utils.assert(typeof plugin.events === 'function', 'Plugin permissions must allow events');{% } %}
    {% if (ext_permission !== 'n') { %}plugin.hapi.utils.assert(typeof plugin.ext === 'function', 'Plugin permissions must allow ext');{% } %}

    var settings = plugin.hapi.utils.applyToDefaults(internals.defaults, options);

    // Set any plugin dependent api properties here
    plugin.api({ });

    next();
};