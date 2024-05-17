(function ($) {
    'use strict';
    var form = $('.contact-form form'),
        message = $('.messenger-box-contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // Fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-danger');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
    }
    
    form.submit(function (e) {
        e.preventDefault();

        const fullName = $('#full-name').val().trim();
        const email = $('#email').val().trim();
        const subject = $('#subject').val().trim();
        const messageText = $('#message').val().trim();

        // Validate required fields
        if (!fullName || !email || !subject) {
            message.fadeIn().addClass('alert-danger');
            message.text('Please fill all the required fields.');
            setTimeout(function () {
                message.fadeOut();
            }, 3000);
            return false;
        }

        // Construct the WhatsApp message
        let whatsappMessage = `I'm coming from your website. Here are my details:\nFull Name: ${fullName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${messageText}`;

        // Encode the message for a URL
        whatsappMessage = encodeURIComponent(whatsappMessage);

        // Construct the WhatsApp URL
        var whatsapp_url = `https://wa.me/+917736851647?text=${whatsappMessage}`;

        // Open WhatsApp URL in new window/tab
        window.open(whatsapp_url, '_blank');
    });
    
})(jQuery);
