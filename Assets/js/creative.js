$(document).ready(function(){
    $(window).bind('scroll', update)

})

function update(){
    let height = $(window).scrollTop()
    height > 80 ? showNavbarBackground():hideNavbarBackground()
}

function showNavbarBackground(){
    $('#mainNav').removeClass('bg-transparent')
    $('#mainNav').addClass('bg-white')
    $('.navbar-light .nav-item .nav-link').css('color', 'rgba(0,0,0,.5)')
    $('.navbar-light .nav-item .nav-link').hover(function(e){
        $(this).css('color', e.type === 'mouseenter'? 'black': 'rgba(0,0,0,.5)')
    })
}

function hideNavbarBackground(){
    $('#mainNav').removeClass('bg-white')
    $('#mainNav').addClass('bg-transparent')
    $('.navbar-light .nav-item .nav-link').css('color', 'white')
    $('.navbar-light .nav-item .nav-link').hover(function(e){
        $(this).css('color', e.type === 'mouseenter'? 'black': 'white')
    })
}