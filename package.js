Package.describe({
    name: 'ixdidos:material-design-iconic-font',
    summary: 'Material Design Icons Font v2.0',
    version: '2.1.4',
    git: 'https://github.com/ixdi/material-design-iconic-font.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addAssets([
        'material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.woff2',
        'material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.woff',
        'material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.ttf'
    ], 'client');
    api.addFiles([
        'material-design-iconic-font/dist/css/material-design-iconic-font.css',
        'fonts-override.css'
    ], 'client');
});
