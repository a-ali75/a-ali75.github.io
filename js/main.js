$(document).ready(function()
{
    $('.menu-toggler').on('click', function()
    {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        $('.box-img').toggleClass('close');
        $('.para').toggleClass('close');
        $('.title').toggleClass('close');
        $('.underline_ad').toggleClass('close');
        $('.box').toggleClass('resize');
    });
});