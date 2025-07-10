// Dark Mode Toggle
const toggleIcon = document.getElementById('theme-toggle');
toggleIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  toggleIcon.textContent = document.body.classList.contains('dark-theme')
    ? '🌙 Dark Mode'
    : '☀️ Light Mode';
});

// Console message
console.log("🎯 Welcome to Shriram's portfolio!");

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
