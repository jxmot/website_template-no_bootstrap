<h1 align="center">Website Template - NO BOOTSTRAP<h1>
<p align="center">Chapter 3<p>

# Desktop vs Mobile

This part is almost always a "gotcha" for me. One of the more frustrating tasks has been getting the whole "Desktop Vs Mobile" thing right. And my nemesis is *Firefox mobile*. The funny thing is I like the desktop version and use it for my everyday browsing. And I use Chrome desktop for development.

## Browsers Used for Testing

| **Browser** | Chrome  | Firefox |   Edge  |  Opera  | Safari  |
|:-----------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| **Desktop** |    Y    |    Y    |    Y    |    Y    |    N    |
| **Mobile**  |    Y    |    Y    |    Y    |    Y    |    N    |

Desktop: Windows 10, 64bit, Pro, current version.
Mobile: Android 12, Pixel 5a

Sorry, I haven't been able to test with Safari or with the other browsers on Linux, or on Microsoft devices. If you (*the reader :smiley:*) are using any of those please take some screen shots and place them in an issue in this repository with information about the browser, device, and screen resolution. Thanks!

### Visible Differences

On desktop, with equally sized view areas there are no noticeable differences. However... on mobile (*wait for it*).... the browser that is "different" from the rest is... FIREFOX! My nemesis. LOL

<div align="center">
    <figure>
        <img src="./mdimg/sshot-home-chrome-android-pixel.jpg" style="width:25%;border: 2px solid black;margin-right: 1rem;"; alt="Screen Shot Chrome on Android 12" txt="Screen Shot Chrome on Android 12"/>
        <img src="./mdimg/sshot-home-ffox-android-pixel.jpg" style="width:25%;border: 2px solid black;margin-left: 1rem;"; alt="Screen Shot Firefox on Android 12" txt="Screen Shot Firefox on Android 12"/>
        <br>
        <figcaption><strong>Chrome is on the left, Firefox on the right.</strong></figcaption>
    </figure>
</div>

<br>

<div align="center">
    <figure>
        <img src="./mdimg/sshot-gallery-chrome-android-pixel.jpg" style="width:25%;border: 2px solid black;margin-right: 1rem;"; alt="Screen Shot Chrome on Android 12" txt="Screen Shot Chrome on Android 12"/>
        <img src="./mdimg/sshot-gallery-ffox-android-pixel.jpg" style="width:25%;border: 2px solid black;margin-left: 1rem;"; alt="Screen Shot Firefox on Android 12" txt="Screen Shot Firefox on Android 12"/>
        <br>
        <figcaption><strong>Chrome is on the left, Firefox on the right.</strong></figcaption>
    </figure>
</div>

<br>

I know the differences may seem subtle, or insignificant. But when you're trying to make both platforms look and *behave* identically those differences will drive you nuts. 

### `devdebug` Data Differences

**`window.`**

|   **Property**  | Chrome  | Firefox |   Edge  |  Opera  |
|:---------------:|:-------:|:-------:|:-------:|:-------:|
|  **innerWidth** |   376   |   378   |   376   |   376   |
| **innerHeight** |   684   |   688   |   636   |   636   |


**Element `#gototop-button.`**

|   **Property**   | Chrome  | Firefox |   Edge  |  Opera  |
|:----------------:|:-------:|:-------:|:-------:|:-------:|
|  **offsetWidth** |    27   |    35   |    27   |    27   |
| **offsetHeight** |    27   |    35   |    27   |    27   |





## Browser Detection

## On the Fly CSS Changes

### Body

### To Top Button

### Lightbox

## Bypass the Detection

# Continue

To [chapter 4 - Deep Details](CH4.md)... (*get ready, it's a long chapter!*)
