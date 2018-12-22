// Y axis scroll speed
let velocity = 0.5;

function update(){
    let pos = $(window).scrollTop();
    // '#page-top'
    $('#mainNav').each(function() {
        let $element = $(this);
        // subtract some from the height b/c of the padding
        let height = 0;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
        $('#mainNav').removeClass('bg-transparent');
        $('#mainNav').addClass('bg-white');
    });
};

$(window).bind('scroll', update);