if (window.jQuery) {
    if (!browserSupports('date')) {
        flatpickr('input[type="date"]');
    }

    var $form          = $('.booking-form'),
        $fields        = $form.find(':input:not(button)'),
        $submit        = $form.find(':button'),
        origSubmitText = $submit.text();

    $form.submit(function (e) {
        e.preventDefault();

        if (!$form.is('.sending')) {

            $form.addClass('sending');
            $submit.text('Sending...');

            var formData = {};

            $fields.each(function () {
                var $el = $(this);

                formData[$el.attr('name')] = $el.val();
            });

            var req = $.ajax({
                url: $form.attr('action'),
                method: "POST",
                data: formData,
                dataType: "json"
            });

            req.done(function () {
                $form.removeClass('sending');
                $submit.text('Sent!');

                setTimeout($submit.text.bind($submit, origSubmitText), 3000);
            });
        }
    });
}

function browserSupports(inputType) {
    var el = document.createElement('input');
    el.setAttribute('type', inputType);

    return el.type == inputType;
};