// script.js

// Smooth scroll on click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Highlight active section link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Optional: Scroll to top on refresh
  window.onbeforeunload = () => window.scrollTo(0, 0);
  
  // Floating elements
  const floatingContainer = document.querySelector('.floating-bg');
  const floatItems = ["Kathyayini", "💡", "🎨", "Coder", "💻", "✨"];
  
  for (let i = 0; i < 20; i++) {
    const float = document.createElement('span');
    float.className = 'float-item';
    float.innerText = floatItems[Math.floor(Math.random() * floatItems.length)];
    float.style.left = Math.random() * 100 + 'vw';
    float.style.top = Math.random() * 100 + 'vh';
    float.style.fontSize = Math.random() * 20 + 20 + 'px';
    float.style.animationDuration = Math.random() * 10 + 10 + 's';
    floatingContainer.appendChild(float);
  }
  // Split the name into letters and wrap them in span tags
document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('name');
  const nameText = nameElement.innerText;

  // Clear existing text
  nameElement.innerHTML = '';

  // Wrap each letter in a <span> tag
  nameText.split('').forEach(letter => {
    const span = document.createElement('span');
    span.innerText = letter;
    nameElement.appendChild(span);
  });

  // Hover effect to trigger the pop-up effect
  nameElement.addEventListener('mousemove', (e) => {
    const spans = nameElement.querySelectorAll('span');
    const nameWidth = nameElement.offsetWidth;
    const mouseX = e.pageX - nameElement.offsetLeft;

    spans.forEach((span, index) => {
      const spanWidth = span.offsetWidth;
      const spanCenter = span.offsetLeft + spanWidth / 2;
      const distance = Math.abs(mouseX - spanCenter);

      // If mouse is close to the letter, show it
      if (distance < nameWidth / 10) {
        span.classList.add('show');
      } else {
        span.classList.remove('show');
      }
    });
  });
});
// Split the name into letters and wrap them in span tags
document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const nameText = nameElement.innerText;
  
    // Clear existing text
    nameElement.innerHTML = '';
  
    // Wrap each letter in a <span> tag
    nameText.split('').forEach(letter => {
      const span = document.createElement('span');
      span.innerText = letter;
      nameElement.appendChild(span);
    });
  
    // Hover effect to trigger the jump effect on each letter individually
    const spans = nameElement.querySelectorAll('span');
  
    spans.forEach(span => {
      span.addEventListener('mouseenter', () => {
        span.classList.add('jump');
      });
  
      span.addEventListener('mouseleave', () => {
        span.classList.remove('jump');
      });
    });
  });
  