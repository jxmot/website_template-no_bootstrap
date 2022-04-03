<h1 align="center">Website Template - NO BOOTSTRAP<h1>
<p align="center">Chapter 5<p>

# Modification Guidelines

## Where to Start

## Reusing Features

### Cookie Consent

This feature can be reused very easily. It consists of three parts:

* HTML - *details below*
* CSS - `cookies.css`
* JavaScript - `cookies.js`

This is the HTML for the Cookie Consent dialog:

```html
    <!-- Cookie Consent -->
    <div id="cookie_con" class="cookie-con">
        <div class="cookie-con-body">
            <div class="cookie-con-msg">
                <p id="cookie_con_text" class="cookie-con-text">
                    This page uses cookies. In fact, it uses 2 of them. The first one is for recording that you have 
                    consented, and the second one records your theme choice.
                </p>
            </div>
            <div class="cookie-con-accept">
                <button id="cc_accbutton" 
                class="cookie-con-button cookie-con-accbutton-bg">
                Accept
                </button>
            </div>
            <div class="cookie-con-decline">
                <button id="cc_decbutton" 
                class="cookie-con-button cookie-con-decbutton-bg">
                DECLINE
                </button>
            </div>
        </div>
    </div>
```

**Edit Before Using:**

* The consent dialog is positioned with `.cookie-con` (found in `cookies.css`). It's currently set at a fixed position  `3.1rem`*above* the bottom of the viewport to give room for the footer. Edit as necessary.
* Change the text between the `<p id="cookie_con_text" class="cookie-con-text"></p>` tags.

**Example of Cookie Use:**

The visibility of the consent dialog and responses to the "Accept" or "DECLINE" buttons are managed in `cookies.js`. 

Using the "theme" selection as an example 
Checking the consent cookie and 

theme cookie when the page is ready:


```pseudocode
When the page is ready:
  Test for the presence of hasConsent() and if found then read the consent cookie, if true then
    Read the theme cookie
    If the theme cookie is present then
      Parse the cookie data and - 
        Apply the CSS file that it specifies.
        Select the radio button that it specifies.
    End If
End
```

```javascript
$().ready(() => {
    // if cookie functionality is loaded then check the consent...
    if((typeof hasConsent === 'function') && (hasConsent() === true)) {
        // was the theme set on the last visit?
        // if it was then change the theme.
        var thm = getCookie('theme');
        if(thm !== '') {
            t = JSON.parse(thm);
            loadCSS(t.file);
            // set the radio button
            $('.themesw').prop('checked', false);
            $('#'+t.id).prop('checked', true);
        }
    }

    // handle theme selections...
    $('.themesw').click(function(event) {
        loadCSS(event.target.value);
        // if cookie functionality is loaded then check the consent...
        if((typeof hasConsent === 'function') && (hasConsent() === true)) {
            // when the theme is changed remember it in cookie.
            makeCookie('theme', {file: event.target.value, id: event.target.id});
        }
    });
});
```

When one of the theme selection radio buttons is selected the `$('.themesw').click(function(event) {})` handler will load the CSS theme file and then save a cookie. The cooking will contain a JSON string - 

```json
{
  "file":"./assets/css/nobs-alt_3.css",
  "id":"th3"
}
```

### To Top Button

This feature can be reused very easily. It consists of three parts:

* HTML - *details below*
* CSS - `nobs-totop.css`
* JavaScript - `totop.js`

```html
    <!-- Page Footer -->
    <footer id="page_footer" class="footer">
        <h3 class="footer-text"><a href="https://github.com/jxmot" target=_blank>github.com/jxmot</a></h3>
        <!-- kept in the footer & keep it anchored with CSS -->
        <button id="gototop_button" class="gototop" onclick="jumpToTop()" title="Go to top of page">
            <span id="gototop_span" class="gototop-span">&#9650;</span>
        </button>
    </footer>
```

**Edit Before Using:**



## Adding Features

# The End!

Or... back to the [beginning](README.md)...