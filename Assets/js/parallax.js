// It will be deleted
let velocity = 0.5;

function update(){
    let pos = $(window).scrollTop();
    // '#page-top'
    $('#page-top').each(function() {
        let $element = $(this);
        // subtract some from the height b/c of the padding
        let height = 0;
        console.log($(this).css('backgroundPosition'))
        console.log($(this).css('backgroundPosition').split(' ')[1])
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
        if($(this).css('backgroundPosition').split(' ')[1].split('p')[0] < -80) {
            showNavbarBackground()
        } else {
            hideNavbarBackground()
        }
    });
};

// Change the colors in future
function showNavbarBackground(){
    $('#mainNav').removeClass('bg-transparent');
    $('#mainNav').addClass('bg-white');
    $('.navbar-light .nav-item .nav-link').css('color', 'rgba(0,0,0,.5)');
    $('.navbar-light .nav-item .nav-link').hover(function(e){
        $(this).css('color', e.type === 'mouseenter'? 'black': 'rgba(0,0,0,.5)');
    })
}

function hideNavbarBackground(){
    $('#mainNav').removeClass('bg-white');
    $('#mainNav').addClass('bg-transparent');
    $('.navbar-light .nav-item .nav-link').css('color', 'white');
    $('.navbar-light .nav-item .nav-link').hover(function(e){
        $(this).css('color', e.type === 'mouseenter'? 'black': 'white');
    })
}

$(window).bind('scroll', update);