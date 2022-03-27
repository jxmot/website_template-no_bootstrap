/*

    NOTE: Although dynamic loading of the images seems to 
    work well. There is a problem that needs to be taken 
    care of when altering the quantity of images. It will 
    be necessary to edit the .gallery classes (media break
    too!) and change the "grid-template-*" values to make 
    sure the gallery looks correct.

    However, it may be possible to break out the "grid-template-*"
    stuff into separate classes that contain only that. And
    then use "JavaScript Media Queries" to manage the CSS grid 
    row and column tempates.

    see - https://css-tricks.com/working-with-javascript-media-queries/

*/
const all_images = {
    gallery: [
        // path to image, "alt" text (caption for lightbox)
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
    content: [
        // #id              Image URL                TBD
        ['home_bg','https://picsum.photos/1920/1080','']
    ]
};

const indentX3 = '            ';
const indentX4 = '                ';

function loadGallery() {
    var htmlout = '';
    $('#gallery').html(htmlout);
    for(idx = 0; idx < all_images.gallery.length; idx++) {
        htmlout += indentX3 + `<div class="grid-img-cell lb-cursor" onclick="lb_openModal(${idx + 1});">` + "\n";
        htmlout += indentX3 + `    <img class="gallery-img" src="${all_images.gallery[idx][0]}">` + "\n";
        var ovtext = '' + (idx + 1) + getOrdinal(idx + 1);
        htmlout += indentX3 + `    <div class="text-overimg">${ovtext}</div>` + "\n";
        htmlout += indentX3 + '</div>\n';
    }
    $('#gallery').html(htmlout);
};

function loadSlides() {
    var htmlout = '';
    $('#modal_slides').html(htmlout);
    for(idx = 0; idx < all_images.gallery.length; idx++) {
        htmlout += indentX4 + '<div class="lb-slides">' + "\n";
        htmlout += indentX4 + `    <div class="lb-numbertext">${idx + 1} / ${all_images.gallery.length}</div>` + "\n";
        htmlout += indentX4 + `    <img class="lb-img" src="${all_images.gallery[idx][0]}" alt="${all_images.gallery[idx][1]}">` + "\n";
        htmlout += indentX4 + '</div>' + "\n";
    }
    $('#modal_slides').html(htmlout);
};

function unloadSlides() {
    $('#modal_slides').html('');
};
