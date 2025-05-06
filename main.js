$(".top-slider .slides").slick({
    dots: false,
    arrows: false,
    infinite: true,
    loop: true,
    speed: 1000,
    autoplay: false,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor:
        ".middle-slider .slides, .bottom-slider .slides, .three-slide-slider .slides",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$(".middle-slider .slides").slick({
    dots: true,
    arrows: true,
    infinite: true,
    loop: true,
    speed: 1000,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    centerMode: true,
    slidesToShow: 3,
    rtl: true,
    slidesToScroll: 1,
    asNavFor:
        ".top-slider .slides, .bottom-slider .slides, .three-slide-slider .slides",
    responsive: [
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});
$(".three-slide-slider .slides").slick({
    dots: false,
    arrows: false,
    infinite: true,
    loop: true,
    speed: 1000,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor:
        ".top-slider .slides, .bottom-slider .slides, .middle-slider .slides",
    responsive: [
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$(".bottom-slider .slides").slick({
    fade: true,
    dots: false,
    arrows: false,
    infinite: true,
    loop: true,
    speed: 1000,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor:
        ".top-slider .slides, .middle-slider .slides, .three-slide-slider .slides"
});
