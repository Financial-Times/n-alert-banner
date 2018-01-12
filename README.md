
# n-alert-banner [![Circle CI](https://circleci.com/gh/Financial-Times/n-alert-banner/tree/master.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-alert-banner/tree/master)

o-banner is a component used for product messaging which could include feature promotion, education, feedback, and legal information.

- [Usage](#usage)
  - [Behaviour](#behaviour)
  - [Markup](#markup)
  - [JavaScript](#javascript)
  - [Sass](#sass)
  - [Themes](#themes)
- [Contact](#contact)
- [Licence](#licence)


## Usage

n-alert-banner includes Sass and JavaScript to show and hide the alert banner. They can be created declaratively by adding markup to the page, or imperatively using JavaScript (only when not using the Build Service).

### Markup

This HTML demonstrates the declarative way to instantiate n-alert-banner. If you are using the Build Service or firing your own `o.DOMContentLoaded` event, this is all you need to create a banner:

```html
<div class="n-alert-banner n-alert-banner--{theme}" data-n-component="n-alert-banner">
    <div class="n-alert-banner__outer">
        <div class="n-alert-banner__inner" data-n-alert-banner-inner="">

            <!-- Content to display on larger screens -->
            <div class="n-alert-banner__content n-alert-banner__content--long">
                <p><b>Something went wrong!</b> Please check and try again.</p>
            </div>

            <!-- Content to display on smaller screens -->
            <div class="n-alert-banner__content n-alert-banner__content--short">
                <p>Please check and try again.</p>
            </div>

            <!-- Button and link -->
            <div class="n-alert-banner__actions">
                <div class="n-alert-banner__action">
                    <a href="#" class="n-alert-banner__button">Button</a>
                </div>
                <div class="n-alert-banner__action--secondary">
                    <a href="#" class="n-alert-banner__link">Text link</a>
                </div>
            </div>

        </div>
    </div>
</div>
```

Variable content based on screen size as well as the link after the button are optional. A minimal alert banner would look like this (note removal of content modifiers):

### JavaScript

No code will run automatically unless you are using the Build Service. You must either construct an n-alert-banner object or fire an `o.DOMContentLoaded` event, which n-alert-banner listens for.

#### Constructing an n-alert-banner

If you have set up your banner declaratively:

```js
const nAlertBanner = require('n-alert-banner');
const alertBannerElement = document.getElementById('my-alert-banner-element');
const myAlertBanner = new nAlertBanner(alertBannerElement);
```

The second argument passed to `nAlertBanner` is an [options object](#options), this can be used to change the behaviour and display of a banner.

If you wish to create a banner from scratch with no existing DOM elements, you can set up your banner like this:

```js
const AlertBanner = require('n-alert-banner');
const myAlertBanner = new AlertBanner(null, {
    theme: 'error',
    contentLong1: 'Something went wrong!',
    contentLong2: 'Please check and try again.',
    contentShort: 'Please check and try again.',
    buttonLabel: 'Button',
    buttonUrl: '#try-button',
    linkLabel: 'Text link',
    linkUrl: '#feedback-link'
});
```

The [available options](#options) are documented below.

#### Manipulating an n-alert-banner

Once you have an n-alert-banner instance, you can manipulate it using the following methods (assume an instance named `myAlertBanner` exists):

  - `myAlertBanner.open()`: display a closed alert banner
  - `myAlertBanner.close()`: hide an open alert banner

#### Options

There are several options used to change the appearance or behaviour of n-alert-banner. All of these are optional, but it's recommended to set at least `contentLong`, `buttonLabel`, and `buttonUrl` or `linkLabel` and `linkUrl`. Set the following as properties on the second argument to `new AlertBanner`:

  - `autoOpen`: Boolean. Whether to automatically open the banner. Defaults to `true`
  - `bannerClass`: String. The top-level banner class, which other classes will be based on. Defaults to `n-alert-banner`
  - `contentLong`: String. The content to display on larger screens, or all screens if `contentShort` is not specified. Defaults to `&hellip;`
  - `contentShort`: String. The content to display on smaller screens. Defaults to the value of `contentLong`
  - `buttonLabel`: String. The banner button label. Defaults to `null`
  - `buttonUrl`: String. The URL the button links to. Defaults to `#`
  - `linkLabel`: String. The banner link label. Set to `null` to hide the link. Defaults to `null`
  - `linkUrl`: String. The URL the link links to. Defaults to `#`
  - `closeButtonLabel`: String. The hidden accessible label for the close button. Defaults to `Close`.
  - `theme`: String. Themes to apply to the banner. [See the themes documentation](#themes) for available values. Defaults to `null`

### Sass

As with all Origami components, o-tooltip has a [silent mode](http://origami.ft.com/docs/syntax/scss/#silent-styles). To use its compiled CSS (rather than using its mixins with your own Sass) set `$o-tooltip-is-silent: false;` in your Sass before you've imported the o-tooltip Sass.

o-tooltip includes mixins that you can use if you'd rather not have origami classnames in your page. These are only available if you're not using the Build Service:

```scss
@include nAlertBanner($class: 'n-alert-banner', $themes: 'all');
```

The `$themes` parameter can be either `all` or specific [theme](#themes):

```scss
@include nAlertBanner($themes: 'error');
```

### Themes

n-alert-banner has the following built-in themes:

  - `error`: Displays an error alert (failure) banner,

	<img src="doc/error-banner.png"> 

  - `neutral`: Displays an neutral alert banner,
	- `success`: Displays an success alert banner

In the markup, these can be applied as classes alongside the `n-alert-banner class`. They are exposed as modifiers:

```html
<div class="n-alert-banner n-alert-banner--error" data-n-component="n-alert-banner">

    ...
</div>
```

In the JavaScript, use the `theme` [option](#options) and pass in the unprefixed theme names:

```js
const myBanner = new oBanner({
    theme: 'success'
});
```

---

## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/n-alert-banner/issues), visit [#ft-next-conversion](https://financialtimes/ft-next-conversion) or email [Origami Support](mailto:conversion.tech@ft.com).

---

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).