


# [Material Design Iconic Font re-packaged for Meteor](http://zavoloklom.github.io/material-design-iconic-font)

Material Design Iconic Font is a full suite of material design icons (created and maintained by [Google](https://github.com/google/material-design-icons)) for easy scalable vector graphics on websites.

Material Design Icons are the official open-source [icons](http://www.google.com/design/spec/resources/sticker-sheets.html#sticker-sheets-components) featured in the Google [Material Design](http://www.google.com/design/spec) specification.

## Installation

In a Meteor app directory, enter:

```
$ meteor add ixdi:material-design-iconic-font
```

## Example

Use it like Font Awesome does but with md prefix

```html
<i class="zmdi zmdi-local-florist zmd-2x"></i>
```

[Examples](http://zavoloklom.github.io/material-design-iconic-font/examples.html)

## Licence

The full details of how Material Design Iconic Font is licensed and 'Thanks to' section: [License page](http://zavoloklom.github.io/material-design-iconic-font/license.html).

## Browser Support
- Chrome 21+
- Firefox 22+
- Opera 12.1+
- Safari 6.1+
- IE 10+
- Android Browser 4.3+
- Not supported in Opera Mini

In fact it can work in earlier versions of browsers accordingly to [caniuse.com](http://caniuse.com/) portal (you can check ttf, woff, transform and animation properties), but i can't test it.

## Changelog
v2.0.2:
- some minor changes in less/scss/css files for better icons display

v2.0.1:
- remove IE8-9 hooks
- fix "!default" to used properly way in sass code
[2.0.1 GitHub milestones](https://github.com/zavoloklom/material-design-iconic-font/issues?milestone=2&page=1&state=closed)
v2.0.0:
- add new Google icons
- remove duplicated icons to reduce font size
- resort and rename icons for better search (no backward compatibility with old icon names)
- no support for IE7-8 (remove eot and svg font files)
- change icon-prefix to 'zmdi-' for capability with Angular JS
- add 'fixed-width', 'list' and 'stack' classes
- add "!default" to sass variables
- add vars with glyph codes to less/sass
- add nested pseudo classes for less/sass

## Versioning

Material Design Iconic Font will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* New icons from Google or changes that breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions, including new non-Google icons, without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit http://semver.org.

## Author
- Email: s.kupletsky@gmail.com
- Website: design4net.ru
- Twitter: https://twitter.com/zavoloklom
- GitHub: https://github.com/zavoloklom/
- CodePen: http://codepen.io/zavoloklom/
