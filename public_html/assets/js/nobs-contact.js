/*  nobs-contact.js - Functions for the contact form

    A counter that counts keystrokes in the form's 
    text area.

    A "submit" functon that clears the form an resets
    the keystroke counter.

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
$().ready(() => {
    // clear the contact form message text counter
    var maxtext = $('form #message').attr('maxlength');
    $('form #textcount').text('(0 / '+ maxtext+')');
    // update the count when typing occurs
    $('form #message').keyup(function() {
        var len = $(this).val().length;
        var lenstr = '('+len+' / '+ maxtext+')';
        $('form #textcount').text(lenstr);
    });
});

function submitForm(contactForm) {
    // clear the fields...
    $('.contact-form-body #name').val('');
    $('.contact-form-body #email').val('');
    $('.contact-form-body #message').val('');
    // clear the contact form message text counter
    var maxtext = $('form #message').attr('maxlength');
    $('form #textcount').text('(0 / '+ maxtext+')');
};

