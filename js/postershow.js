var $jq = jQuery.noConflict();
$jq(document).ready(function(){
    $jq('slides').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
