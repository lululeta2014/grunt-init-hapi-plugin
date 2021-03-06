exports.description = 'Create a hapi plugin';

exports.template = function(grunt, init, done) {

    init.process({type: 'hapi'}, [
        init.prompt('name', 'hapi-plugin'),
        init.prompt('description', 'A very hapi plugin'),
        init.prompt('version', '0.0.1'),
        init.prompt('repository'),
        init.prompt('licenses', 'MIT'),
        init.prompt('author_name'),
        {
            name: 'hapi_version',
            message: 'What version of hapi is this compatible with?',
            default: '1.x.x'
        },
        {
            name: 'route_permission',
            message: 'Does the plugin need to be able to add routes?',
            default: 'Y/n'
        },
        {
            name: 'state_permission',
            message: 'Does the plugin need to be able to save state?',
            default: 'Y/n'
        },
        {
            name: 'helper_permission',
            message: 'Does the plugin need to be able to create helpers?',
            default: 'Y/n'
        },
        {
            name: 'events_permission',
            message: 'Does the plugin need to be able to create events?',
            default: 'Y/n'
        },
        {
            name: 'ext_permission',
            message: 'Does the plugin need to be able to create extensions?',
            default: 'Y/n'
        }
    ], function(err, props) {

        var files = init.filesToCopy(props);
        init.addLicenseFiles(files, props.licenses);
        init.copyAndProcess(files, props);

        init.writePackageJSON('package.json', {
            name: props.name,
            decription: props.description,
            version: props.version,
            author: props.author_name,
            keywords: ['hapi', 'plugin'],
            main: 'index',
            node_version: '0.10.x',
            peerDependencies: {
                'hapi': props.hapi_version
            },
            dependencies: {
            },
            devDependencies: {
                'lab': '0.1.x',
                'hapi': props.hapi_version
            },
            npm_test: 'make test',
            licenses: props.licenses
        });

        done();
    });
};
