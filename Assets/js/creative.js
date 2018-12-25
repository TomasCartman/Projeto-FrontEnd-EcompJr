$(document).ready(function(){
    $(window).bind('scroll', checkHeight)

})

function checkHeight(){
    let height = $(window).scrollTop()
    height > 240 ? showNavbarBackground():hideNavbarBackground()
}

// Change colors in future and maybe change to an animation in css
function showNavbarBackground(){
    $('#mainNav').removeClass('bg-transparent')
    $('#mainNav').addClass('bg-white')
    $('.navbar-light .nav-item .nav-link').css('color', 'rgba(0,0,0,.5)')
    $('.navbar-light .nav-item .nav-link').hover(function(e){
        $(this).css('color', e.type === 'mouseenter'? '#2C3590': 'rgba(0,0,0,.5)')
    })
}

function hideNavbarBackground(){
    $('#mainNav').removeClass('bg-white')
    $('#mainNav').addClass('bg-transparent')
    $('.navbar-light .nav-item .nav-link').css('color', 'white')
    $('.navbar-light .nav-item .nav-link').hover(function(e){
        $(this).css('color', e.type === 'mouseenter'? '#2C3590': 'white')
    })
}