// SWIPER 1 INIT: "CATEGORY"
const swiperCategory = new Swiper('#swiper-category', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next-category',
        prevEl: '.swiper-button-prev-category',
    },
});

// SWIPER 1 INIT: "TESTIMONIAL"
const swiperTestimonial = new Swiper('#swiper-testimonial', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next-testimonial',
        prevEl: '.swiper-button-prev-testimonial',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});