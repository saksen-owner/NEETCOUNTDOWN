// Set the date we're counting down to
const countDownDate = new Date("May 3, 2026 00:00:00").getTime();

// NEET Motivational Quotes Array
const neetQuotes = [
  "Success in NEET is not about luck, it's about hard work and perseverance.",
  "Every great doctor was once a student who never gave up.",
  "Dream big, study hard, and make your NEET journey count.",
  "The journey to a white coat begins with a single step of dedication.",
  "Let your passion for medicine fuel your preparation every day.",
  "NEET is not just an exam, it's the gateway to your dreams.",
  "Stay focused, stay positive, and let your efforts speak for you.",
  "Every hour you invest today brings you closer to your medical dream.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your determination today will save lives tomorrow.",
  "Push your limits, because your future patients are counting on you.",
  "The pain you feel today will be the strength you feel on exam day.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "You are capable of amazing things. Believe in yourself.",
  "Let your ambition be greater than your fear.",
  "The difference between ordinary and extraordinary is that little extra.",
  "Your journey to NEET is a marathon, not a sprint. Keep moving forward.",
  "Great achievements require great sacrifices. Stay strong.",
  "The best way to predict your future is to create it.",
  "You don't have to be perfect to succeed, just persistent.",
  "Every setback is a setup for a comeback. Don't quit.",
  "Your dreams are valid. Your efforts make them real.",
  "The future belongs to those who prepare for it today.",
  "Let your hard work be louder than your excuses.",
  "You are one step closer to your stethoscope with every study session.",
  "Stay hungry for knowledge, and NEET will be yours.",
  "The only limit to your impact is your imagination and commitment.",
  "You are not alone in this journey. Every aspirant is fighting the same battle.",
  "Let your failures be your motivation, not your defeat.",
  "The white coat awaits those who never give up.",
  "Discipline is the bridge between goals and accomplishment.",
  "Your NEET journey is a story of courage and commitment.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Success is not for the chosen few, but for the few who choose it every day.",
  "Let your dreams be bigger than your fears and your actions louder than your words.",
  "You are preparing not just for an exam, but for a life of service.",
  "Stay positive, work hard, and make it happen.",
  "The secret to getting ahead is getting started.",
  "Your journey is tough, but so are you.",
  "The best view comes after the hardest climb."
];

const quoteAuthors = [
  "Anonymous", "Anonymous", "Anonymous", "Anonymous", "Anonymous", "Anonymous", "Anonymous", "Anonymous", "Sam Levenson", "Anonymous",
  "Anonymous", "Anonymous", "Robert Collier", "Anonymous", "Anonymous", "Anonymous", "Anonymous", "Anonymous", "Abraham Lincoln", "Anonymous",
  "Anonymous", "Anonymous", "Malcolm X", "Anonymous", "Anonymous", "Anonymous", "Tony Robbins", "Anonymous", "Anonymous", "Anonymous",
  "Jim Rohn", "Anonymous", "Anonymous", "Anonymous", "Anonymous", "Anonymous", "Anonymous", "Mark Twain", "Anonymous", "Anonymous"
];

let currentQuoteIndex = 0;

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * neetQuotes.length);
  currentQuoteIndex = randomIndex;
  
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  
  // Add fade out effect
  quoteText.style.opacity = '0';
  quoteAuthor.style.opacity = '0';
  
  setTimeout(() => {
    quoteText.textContent = neetQuotes[randomIndex];
    quoteAuthor.textContent = `- ${quoteAuthors[randomIndex]}`;
    
    // Add fade in effect
    quoteText.style.opacity = '1';
    quoteAuthor.style.opacity = '1';
  }, 300);
}

// Function to change quote (called by button click)
function changeQuote() {
  displayRandomQuote();
}

// Add particle effects (reuse from nda.js)
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
  document.body.appendChild(particlesContainer);
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #43e97b;
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
    particlesContainer.appendChild(particle);
  }
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Initialize with a random quote
displayRandomQuote();

// Auto-refresh quote every 30 seconds
setInterval(displayRandomQuote, 30000);

// Update the count down every 1 second
const x = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();
  
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the corresponding elements with leading zeros
  document.getElementById("days").innerHTML = days.toString().padStart(3, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
  
  // Add pulse effect when seconds change
  const secondsElement = document.getElementById("seconds");
  secondsElement.style.animation = 'none';
  setTimeout(() => {
    secondsElement.style.animation = 'numberPulse 0.5s ease-in-out';
  }, 10);
  
  // If the count down is finished, show mission complete
  if (distance < 0) {
    clearInterval(x);
    const countdownGrid = document.querySelector('.countdown-grid');
    countdownGrid.innerHTML = `
            <div class="mission-complete">
                <div class="complete-text">MISSION</div>
                <div class="complete-text">COMPLETE</div>
                <div class="complete-subtitle">EXAM DAY HAS ARRIVED</div>
            </div>
        `;
    // Update mission status
    const statusText = document.querySelector('.status-text');
    if (statusText) {
      statusText.textContent = 'MISSION STATUS: COMPLETE';
      statusText.style.color = '#43e97b';
    }
  }
}, 1000);

// Add hover effects
function addHoverEffects() {
  const timeBoxes = document.querySelectorAll('.time-box');
  timeBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    box.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}
addHoverEffects();

document.addEventListener('keydown', function(e) {
  if (e.code === 'Space') {
    e.preventDefault();
    document.body.style.filter = 'hue-rotate(90deg)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 500);
  }
});