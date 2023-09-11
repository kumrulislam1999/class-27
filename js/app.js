$('#slick1').slick({
    rows: 3,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesPerRow: 3,
                rows: 3,
                slidesToScroll: 1,
                slidesToShow: 1,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                rows: 1,
                slidesPerRow: 1,
                slidesToScroll: 1,
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});