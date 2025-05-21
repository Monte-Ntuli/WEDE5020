// Toggle gallery visibility
document.getElementById('toggleGallery').addEventListener('click', function() {
    const gallery = document.getElementById('galleryContainer');
    gallery.style.display = (gallery.style.display === 'none' ? 'block' : 'none');
});

// Testimonial carousel
const testimonials = document.querySelectorAll('.testimonial-carousel blockquote');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((t, i) => t.classList.toggle('active', i === index));
}

document.getElementById('prevTestimonial').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});

document.getElementById('nextTestimonial').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

showTestimonial(currentIndex);