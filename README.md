
# n-alert-banner [![Circle CI](https://circleci.com/gh/Financial-Times/n-alert-banner/tree/master.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-alert-banner/tree/master)

n-alert-banner is a component used for product messaging.

- [Usage](#usage)
  - [Behaviour](#behaviour)
  - [Markup](#markup)
  - [Sass](#sass)
  - [Themes](#themes)
- [Contact](#contact)
- [Licence](#licence)


## Usage

n-alert-banner includes Sass and JavaScript to show and hide the alert banner. They can be created declaratively by adding [Markup](#markup) to the page, or imperatively using JavaScript ([Constructing an n-alert-banner](#Constructing an n-alert-banner)).

### Behaviour

n-alert-banner elements appears fixed to the top of the screen. You can dismiss a banner, which will hide it but not remove it from the DOM. By default the last banner to be created will be the one that automatically opens. Opening a new banner will close any that are currently open.

### Markup

This HTML demonstrates the declarative way to instantiate n-alert-banner. Initialize the alert banner by using `AlertBanner.init()` and add the following to your code:

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

If you do not wish for the user to be able to close the alert banner use `AlertBanner.init(null, { closeButton: false})`.

#### Constructing an n-alert-banner

If you have set up your alert banner declaratively:

```js
const nAlertBanner = require('n-alert-banner');
const alertBannerElement = document.getElementById('my-alert-banner-element');
const myAlertBanner = new nAlertBanner(alertBannerElement);
```

The second argument passed to `nAlertBanner` is an [options object](#options), this can be used to change the behaviour and display of a banner.

If you wish to create an alert banner from scratch with no existing DOM elements, you can set up your banner like this:

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

  - `autoOpen`: Boolean. Whether to automatically open the alert banner. Defaults to `true`
  - `bannerClass`: String. The top-level banner class, which other classes will be based on. Defaults to `n-alert-banner`
  - `contentLong`: String. The content to display on larger screens, or all screens if `contentShort` is not specified. Defaults to `&hellip;`
  - `contentShort`: String. The content to display on smaller screens. Defaults to the value of `contentLong`
  - `buttonLabel`: String. The banner button label. Set to `null` to hide the button. Defaults to `null`.
  - `buttonUrl`: String. The URL the button links to. Defaults to `#`
  - `linkLabel`: String. The banner link label. Set to `null` to hide the link. Defaults to `null`
  - `linkUrl`: String. The URL the link links to. Defaults to `#`
  - `closeButtonLabel`: String. The hidden accessible label for the close button. Defaults to `Close`.
  - `theme`: String. Themes to apply to the alert banner. [See the themes documentation](#themes) for available values. Defaults to `null`
	- `closeButton`: Boolean. False prevents close button from being created. Defaults to `true`

### Sass

Similar to Origami components, n-alert-banner has a [silent mode](http://origami.ft.com/docs/syntax/scss/#silent-styles). To use its compiled CSS (rather than using its mixins with your own Sass) set `$n-alert-banner-is-silent: false;` in your Sass before you've imported the n-alert-banner Sass.

n-alert-banner includes mixins that you can use if you'd rather not have next classnames in your page.

```scss
@include nAlertBanner($class: 'n-alert-banner', $themes: 'all');
```

The `$themes` parameter can be either `all` or a specific [theme](#themes):

```scss
@include nAlertBanner($themes: 'error');
```

### Themes

n-alert-banner has the following built-in themes:

  - `error`: Displays an error alert (failure) banner (crimson colour scheme),

	![Error alert banner example](docs/error-alert-banner.png?raw=true "Error")

  - `neutral`: Displays an neutral alert banner (white and black colour scheme),

	![Neutral alert banner example](docs/neutral-alert-banner.png?raw=true "Neutral")

  - `success`: Displays an success alert banner (jade colour scheme)

	![Success alert banner example](docs/success-alert-banner.png?raw=true "Success")

In the markup, these can be applied as classes alongside the `n-alert-banner class`. They are exposed as modifiers:

```html
<div class="n-alert-banner n-alert-banner--error" data-n-component="n-alert-banner">

    ...
</div>
```

In the JavaScript, use the `theme` [option](#options) and pass in the theme name:

```js
const myBanner = new AlertBanner({
    theme: 'success'
});
```

---

## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/n-alert-banner/issues), slack `#ft-next-conversion`, or email [ft-next-conversion](mailto:conversion.tech@ft.com).

---

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
