# Website Template - NO BOOTSTRAP

After some (*ok, more than just "some"*) frustration getting Bootstrap to cooperate on a number of issues:

* Not all browsers produce the same results
* Bootstrap CSS is an excellent CSS framework, but too complicated for basic needs
* I'm tired of it lol

## The Result

After some research, experimentation, and playing around I put together what you see in this repository. Before I even started I had some expectations to fill:

* Must be responsive
* Must work, the navigation menu must operate and select targets.

It was also quite frustrating just *finding* **working** examples of a non-Bootstrap "responsive" page with a navigation menu. Too often I'd find something that(*pick one or more of the following...*):

* Did not work at all
* Was not truly "responsive"
* The "code" was poorly written and/or disorganized
* The author didn't test their work

So, here's what I've got now...

## Details

There are three *essential* files:

* `index.html`
* `nobs.css`
* `nobs.js`

The rest are related to favicon images.

The only external resource used is jQuery.

### Navigation

The HTML portion of the navigation is somewhat *unique* when compared to others I've seen. Most were using a `<input type="button">`, what you will find here uses `checkbox` instead of a `button` type.

```
    <!-- Navigation Bar -->
    <header id="nav-header" class="nav-header">
        <!-- Logo, reloads the page. -->
        <a id="nav-logo_link" class="nav-logo-img" href="./index.html">
            <img class="logo-img" src="./no_bootstrap.png">
        </a>
        <!-- Hamburger Icon 
        -->
        <input id="nav-togg" type="checkbox"/>
        <label id="nav-close" class="nav-icon" for="nav-togg">
            <span class="nav-icon-line"></span>
        </label>
        <!-- Menu -->
        <nav id="nav-menu" class="nav">
            <ul class="menu">
                <li><a id="home" class="navitem" href="#main">Home</a></li>
                <li><a id="nav1" class="navitem" href="#navtarg1">Gallery</a></li>
                <li><a id="nav2" class="navitem" href="#navtarg2">Blog</a> </li>
                <li><a id="nav3" class="navitem" href="#navtarg3">About</a></li>
            </ul>
        </nav>
    </header>
```

The file `nobs.js` contains all of the code that handles the navigation menu. This includes scrolling correctly and not missing the menu item targets.

Here is the menu item handler:

```
    /*
        wait for a click from any menu item... 
    */
    $('.navitem').click(function(event) {
        consolelog('navitem target: ' + event.target.id);
        consolelog('navitem href: ' + event.target.href);

        // Prevent the default action from occuring.
        event.preventDefault();

        // let's close the nav menu...
        $('#nav-togg')[0].checked = false;

        // scroll to the target ID, and place it just 
        // below nav bar (when inactive).
        var scrollID = event.target.href;
        var tmp = scrollID.split("#");
        $('html').stop(true).animate({
            scrollTop: ($('#'+tmp[1]).position().top - hdrheight)
        },0);
    });
```

The value `hdrheight` is calculated after the page is loaded:

```
$().ready(() => {
    // this is the best place to get the height of the 
    // <header> that contains the nav menu.
    var hdrheight = $('#nav-header').height();
});
```

### Responsiveness

Only one media break is used: `@media (min-width: 768px)`. 

### Extras

**Scrolling:**

**Footer:** Personally, I like a footer that sticks to the bottom of the *window*... not at the bottom the page. But that can be problematic. Especially if the content extends below the footer. It won't be seen.

But that is taken care of here. A simple calculation and then changing the `padding-bottom` style of the main content tag:

```
$('#main').css('padding-bottom', ($('#page-footer').height() + ($('#page-footer').height() * 0.15)) + 'px');
```

Here's the associated HTML:

```
<main id="main" class="main-content">
  <!-- page content goes here -->
</main>

<footer id="page-footer" class="footer">
    <h3 class="footer-text">footer</h3>
</footer>
```

Here's the calculation:

```
($('#page-footer').height() + ($('#page-footer').height() * 0.15)) + 'px'
``` 

It takes the height of the `<footer>` and adds a little, the value is in **px** (pixels). Then that value is placed in the 'padding-bottom' attribute of `<main id="main" class="main-content">`.

**Closing the Menu:**




