/*
    nobs-images.js - A list of images that are used by 
    the containing page. There are also functions for 
    dynamically creating the HTML for the gallery and 
    for the lightbox modal.

    NOTE: Although dynamic loading of the images seems to 
    work well. There is a problem that needs to be taken 
    care of when altering the quantity of images. It will 
    be necessary to edit the .gallery classes (media break
    too!) and change the "grid-template-*" values to make 
    sure the gallery looks correct.

    FUTURE: However, it may be possible to break out the 
    "grid-template-*" stuff into separate classes that 
    contain only that. And then use "JavaScript Media Queries" 
    to manage the CSS grid row and column tempates.
*/
const all_images = {
    gallery: [
        // path to thumbnail image, "alt" text (caption for gallery, not used)
        ['https://picsum.photos/seed/abcd/300/200',''],
        ['https://picsum.photos/seed/efgh/300/200','Padlocks on a Fence'],
        ['https://picsum.photos/seed/ijkl/300/200',''],
        ['https://picsum.photos/seed/mnop/300/200',''],
        ['https://picsum.photos/seed/qrst/300/200',''],
        ['https://picsum.photos/seed/uvwx/300/200',''],
        ['https://picsum.photos/seed/yzyz/300/200','Gluten Free???'],
        ['https://picsum.photos/seed/woof/300/200','']
    ],
/*
    grid: [
            [
                ['grid-template-columns', '1fr 1fr'],
                ['grid-template-rows', '1fr 1fr 1fr 1fr']
            ],
            [   // (min-width: 768px)
                ['grid-template-columns', '1fr 1fr 1fr'],
                ['grid-template-rows', '1fr 1fr']
            ]
    ],
*/
/*
    content: [
        // #id
        ['home_bg',
            ['background','https://picsum.photos/1920/1080']
-- OR? --
            ['background','url("https://picsum.photos/1920/1080") no-repeat center']
        ],
        ['home_bg_overlay',
            ['background-color','var(--trans-black)']
        ]
    ]
*/
};

// Makes the rendered HTML "look nice"
const indentX3 = '            ';
const indentX4 = '                ';

function loadGallery(overimg = false, gallery = all_images.gallery) {
    var htmlout = '';
    $('#gallery').html(htmlout);
    for(idx = 0; idx < gallery.length; idx++) {
        htmlout += indentX3 + `<div class="grid-img-cell lb-cursor" onclick="disableScrolling();lb_openModal(${idx + 1});">` + "\n";

        htmlout += indentX4;
        if(gallery[idx][1] === '')
            htmlout += `    <img class="gallery-img" src="${gallery[idx][0]}">`;
        else
            htmlout += `    <img class="gallery-img" src="${gallery[idx][0]}" alt="${gallery[idx][1]}">`;

        if(overimg === true) {
            let ovtext = '' + (idx + 1) + getOrdinal(idx + 1);
            htmlout += indentX3 + `    <div class="text-overimg">${ovtext}</div>` + "\n";
        }
        htmlout += indentX3 + '</div>\n';
    }
    $('#gallery').html(htmlout);
};

function unloadGallery() {
    $('#gallery').html('');
};

function loadSlides(slides = (all_images.lightbox === undefined ? all_images.gallery : all_images.lightbox)) {
    var htmlout = '';
    $('#modal_slides').html('');
    for(idx = 0; idx < slides.length; idx++) {
        htmlout += indentX4 + '<div class="lb-slides">' + "\n";
        htmlout += indentX4 + `    <div class="lb-numbertext">${idx + 1} / ${slides.length}</div>` + "\n";

        htmlout += indentX4;
        if(slides[idx][1] === '')
            htmlout += `    <img class="lb-img" src="${slides[idx][0]}">`;
        else
            htmlout += `    <img class="lb-img" src="${slides[idx][0]}" alt="${slides[idx][1]}">`;

        htmlout += "\n" + indentX4 + '</div>' + "\n";
    }
    $('#modal_slides').html(htmlout);
};

function unloadSlides() {
    $('#modal_slides').html('');
};
