// Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

if(menuToggle){
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  if(question){
    question.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  }
});
