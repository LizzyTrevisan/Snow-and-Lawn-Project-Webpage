document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting

  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value); // Parse age as an integer
  const landSize = parseInt(document.getElementById('landSize').value); // Parse land size as an integer

  console.log(`Age: ${age}`); // Log the age to the console to verify it's being parsed correctly

  // Check if the customer is 18 years or older
  if (age < 18) {
    alert(`Sorry, ${name}. You must be at least 18 years old to use our service.`);
    return; // Stop the rest of the function if the age is less than 18
  }

  // Set price per sq ft (can adjust as necessary)
  const pricePerSqFt = 0.10;
  const estimatedPrice = landSize * pricePerSqFt;

  // Update the estimated price in the quote section
  document.getElementById('quoteOutput').innerHTML = `
    <h3>Quote for ${name}</h3>
    <p>Estimated Price: $${estimatedPrice.toFixed(2)}</p>
  `;

  // Update the pricing for each payment option
  let price = estimatedPrice;
  document.getElementById('cash').innerText = `$${price.toFixed(2)} per visit`;
  document.getElementById('card').innerText = `$${(price + 5).toFixed(2)} per visit`;
  document.getElementById('stripe').innerText = `$${(price + 10).toFixed(2)} per visit`;
  document.getElementById('paypal').innerText = `$${(price + 10).toFixed(2)} per visit`;
});


 
const testimonials = document.querySelectorAll('.testimonial');
let testimonialIndex = 0;

// Function to show the current testimonial based on index
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'flex' : 'none'; // Use 'flex' to maintain layout integrity
  });
}

// Function to go to the next testimonial
function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length; // Cycle through testimonials
  showTestimonial(testimonialIndex);
}

// Show the first testimonial by default
showTestimonial(testimonialIndex);

// Rotate testimonials every 3 seconds
setInterval(nextTestimonial, 3000);






const images = [
  "Snow.jpg",  // Path relative to the root of your project
  "Lawn.jpg"   // Path relative to the root of your project
];

let currentImageIndex = 0;

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;  // Cycle through images
  document.body.style.setProperty('background-image', `url("${images[currentImageIndex]}")`);
}

// Change the background every 5 seconds
setInterval(changeBackgroundImage, 5000);

// Set the initial background image
changeBackgroundImage();
