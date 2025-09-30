const initSlider = () => {
    const wrapper = document.querySelector(".slider-wrapper");
    const container = document.querySelector(".index-catalog__container");
    if (!wrapper || !container) return;

    const imageList = wrapper.querySelector(".image-list");
    const imageItemContainers = wrapper.querySelectorAll(".image-item-container");
    const imageCaptions = wrapper.querySelectorAll(".image-caption");
    const slideButtons = wrapper.querySelectorAll(".slide-button");
    const sliderScrollbar = container.querySelector(".slider-scrollbar");
    if (!imageList || !sliderScrollbar || slideButtons.length === 0) return;

    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    if (!scrollbarThumb) return;

    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            imageItemContainers.forEach(container => {
                const image = container.querySelector(".image-item");
                const caption = container.querySelector(".image-caption");
                image.style.transform = `translateX(${-scrollAmount}px)`;
                caption.style.transform = `translateX(${-scrollAmount}px)`;
            });
            imageCaptions.forEach(caption => {
                caption.style.transform = `translateX(${-scrollAmount}px)`;
            });
        });
    });
    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);