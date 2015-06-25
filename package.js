Package.describe({
    name: 'ixdi:material-design-iconic-font',
    summary: 'Material Design Icons Font v2.0',
    version: '2.0.2',
    git: 'https://github.com/ixdi/material-design-iconic-font.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addFiles([
        'material-design-iconic-font/dist/font/Material-Design-Iconic-Font.woff',
        'material-design-iconic-font/dist/font/Material-Design-Iconic-Font.ttf',
        'material-design-iconic-font/dist/css/material-design-iconic-font.css',
        'fonts-override.css'
    ], 'client');
});
