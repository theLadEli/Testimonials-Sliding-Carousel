const testimonials = [
    {
        name: "Zoe M.",
        project: "Full House Renovation",
        quote: "I was completely lost when I started planning my home renovation. Every builder gave me a different quote, and I had no idea who was right. But then I found BuildBuddy. It simplified the quoting process, and I could finally compare apples to apples. Thanks to BuildBuddy, we found the perfect builder."
    },
    {
        name: "Ian H.",
        project: "Loft Conversion",
        quote: "Doing a loft conversion seemed like a huge task, but BuildBuddy made it a breeze. The level of detail in the specifications was impressive, making sure that there were no nasty surprises along the way."
    },
    {
        name: "Nick W.",
        project: "Builder",
        quote: "I've been in the building trade for over a decade, and I've never come across a tool like BuildBuddy. The detailed project outlines make quoting accurate and fast. This platform is a builder's dream come true."
    },
    {
        name: "Paul T.",
        project: "Builder",
        quote: "Before BuildBuddy, each project felt like reinventing the wheel. But with clear project details and easy communication, each new job is smooth sailing. This is hands down the best tool I've used in my career."
    },
    {
        name: "Sarah J.",
        project: "Single Storey Rear Extension",
        quote: "The BuildBuddy onboarding experience was seamless and straightforward. It felt as though I was being personally guided through each step. The default specs saved me hours of time!"
    },
    {
       name: "George L.",
       project: "Double Storey Extension",
       quote: "I was pretty nervous starting my two-story extension, but the Checklist feature on BuildBuddy was a game-changer. It helped keep everything on track, and most importantly, kept me calm throughout the whole process. Huge relief!" 
    }
];
let currentTestimonialIndex = 0;

// Function to update testimonial
function updateTestimonial() {
    document.getElementById('testimonial-body').textContent = testimonials[currentTestimonialIndex].quote;
    document.getElementById('testimonial-name').textContent = testimonials[currentTestimonialIndex].name;
    document.getElementById('testimonial-project-type').textContent = testimonials[currentTestimonialIndex].project;

    // update active review indicator
    const circles = document.querySelectorAll('.circle-review');
    for(let i = 0; i < circles.length; i++) {  
        circles[i].className = i === currentTestimonialIndex ? 'circle-review active-review' : 'circle-review';
    }
}

// generate circle-review elements based on testimonials length
const navContainer = document.getElementById('nav-circles');

// Clearing existing children
while(navContainer.firstChild){
    navContainer.firstChild.remove();
}

for(let i = 0; i < testimonials.length; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle-review';
    navContainer.appendChild(circle);  // insert circles
}

// add event listeners to arrow images for manual navigation
const navArrows = document.getElementsByClassName('review-nav-arrows');
navArrows[0].addEventListener('click', () => { // back arrow
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

navArrows[1].addEventListener('click', () => { // next arrow
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial();
});

// Automatically cycle every ten seconds
setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial();
}, 10000);

// load first testimonial on page load
window.onload = updateTestimonial;
