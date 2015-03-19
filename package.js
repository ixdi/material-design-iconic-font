Package.describe({
    name: 'ixdi:material-design-iconic-font',
    summary: 'Material Design Icons Font',
    version: '1.1.1-1',
    git: 'https://github.com/ixdi/material-design-iconic-font.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addFiles([
        'material-design-iconic-font/fonts/Material-Design-Iconic-Font.woff',
        'material-design-iconic-font/fonts/Material-Design-Iconic-Font.ttf',
        'material-design-iconic-font/fonts/Material-Design-Iconic-Font.svg',
        'material-design-iconic-font/css/material-design-iconic-font.css',
        'fonts-override.css'
    ], 'client');
});
