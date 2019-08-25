const banners = document.querySelectorAll(".reveal");
const viewportHeight = window.innerHeight;

const isInViewport = function() {
    for (let banner of banners) {
        if ((banner.getBoundingClientRect().top < viewportHeight) && (banner.getBoundingClientRect().bottom > 0)) {
            banner.classList.add("reveal_active");
        }else {
            banner.classList.remove("reveal_active");
        }
    }   
};

document.addEventListener("scroll", isInViewport);