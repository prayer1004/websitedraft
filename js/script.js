const text = "I have no idea...";
let index = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

window.onload = type;
// Efek scroll muncul untuk teks di halaman about
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });
  
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  function revealTimeline() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);

