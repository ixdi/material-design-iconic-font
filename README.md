


# [Material Design Iconic Font re-packaged for Meteor](http://zavoloklom.github.io/material-design-iconic-font)

[![Material Design Iconic Font](http://zavoloklom.github.io/material-design-iconic-font/img/Material-Design-Iconic-Font.png)](http://zavoloklom.github.io/material-design-iconic-font/)

Material Design Iconic Font is a full suite of material design icons (created and maintained by [Google](https://github.com/google/material-design-icons)) for easy scalable vector graphics on websites.

Material Design Icons are the official open-source [icons](http://www.google.com/design/spec/resources/sticker-sheets.html#sticker-sheets-components) featured in the Google [Material Design](http://www.google.com/design/spec) specification.

**Get started** at [http://zavoloklom.github.io/material-design-iconic-font](http://zavoloklom.github.io/material-design-iconic-font)

**Upgrading** from 1.x to 2.x at old docs [http://zavoloklom.github.io/material-design-iconic-font/v1/](http://zavoloklom.github.io/material-design-iconic-font/v1/)

**Issue with cheatsheet**: If you think icons do not match the cheatsheet page, please read [issue 47](https://github.com/zavoloklom/material-design-iconic-font/issues/47).

**If you use font as standalone font - you should update it carefully, because 2.1 ttf file cheat sheet hasn't backward compatibility with 2.0. Sorry for that, but in 2.0 was a bug that I couldn't remove without breaking backward compatibility.**

This package provides the CSS toolkit without LESS or SASS.

## Installation

In a Meteor app directory, enter:

```
$ meteor add ixdi:material-design-iconic-font
```

## Example

Use it like Font Awesome does but with zmdi prefix

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
v2.1.1:
- fix bugs in aliases LASS/SASS files

v2.1.0:
- change base font folder to "fonts"
- resort and rename icons for better search
- change variables prefix in LESS/SASS from ```md-``` to ```zmdi-```
- change helper classes prefix in LESS/SASS from ```zmd-``` to ```zmdi-hc-```
- change icons variables prefix in LESS/SASS from ```md-iconset-``` to ```zmdi-var-```
- some changes with icons to make them look pixel perfect at 14px lie
- add some community icons
- add some new icons in directional and social sections
[2.1.0 GitHub milestones](https://github.com/zavoloklom/material-design-iconic-font/issues?milestone=4&page=1&state=closed)

All changes in LESS/SASS/CSS has backward compatibility with 2.0.

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
- Twitter: https://twitter.com/zavoloklom
- GitHub: https://github.com/zavoloklom/
- CodePen: http://codepen.io/zavoloklom/

## Donate
- You can support me via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=s%2ekupletsky%40gmail%2ecom&lc=US&item_name=Material%20Design%20Iconic%20Font&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted), [WebMoney](https://funding.webmoney.ru/material-design-iconic-font/donate) or [Gratipay](http://gratipay.com/zavoloklom/)
