const cards = document.querySelectorAll('.model-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));



const testimonialCards = document.querySelectorAll('.testimonial-card');

const observerTestimonials = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

testimonialCards.forEach(card => observerTestimonials.observe(card));


//Accordion - FAQ menu

const accordions = document.querySelectorAll(".accordion");
var i;

accordions.forEach(acc => {
    acc.addEventListener("click", () => {

        accordions.forEach(other => {
            if (other !== acc) {
                other.classList.remove('active');
                other.nextElementSibling.style.maxHeight = null;
            }
        });

        acc.classList.toggle('active');
        const panel = acc.nextElementSibling;
        if (acc.classList.contains('active')) {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
            panel.style.maxHeight = null;
        }
    });
});

//Model card details

const modelCards = document.querySelectorAll('.model-card');

modelCards.forEach(card => {
    const toggle = card.querySelector('.details-toggle');

    toggle.addEventListener('click', () => {
        modelCards.forEach(other => {
            if (other !== card) {
                other.classList.remove('active');
            }
        });

        card.classList.toggle('active');
    });
});