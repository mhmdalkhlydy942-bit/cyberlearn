// script.js — تفعيل روابط navbar, toggle mobile, clickable images, smooth scroll, form sample
document.addEventListener('DOMContentLoaded', () => {
  // ====== 1) active link based on filename ======
  const current = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
  document.querySelectorAll('.navbar a').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if (href === current || (href==='index.html' && current==='')) {
      a.classList.add('active-link');
    }
  });

  // ====== 2) mobile toggle ======
  const nav = document.querySelector('.navbar');
  const btn = document.querySelector('.nav-toggle');
  if(btn && nav){
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // ====== 3) clickable images animation (add class and remove after time) ======
  document.querySelectorAll('.clickable-img').forEach(img=>{
    img.addEventListener('click', () => {
      img.classList.add('img-pressed');
      setTimeout(()=> img.classList.remove('img-pressed'), 500);
    });
  });

  // ====== 4) smooth scroll for internal anchors ======
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // ====== 5) small form validation if present (email) ======
  const sampleForm = document.getElementById('sampleForm');
  if(sampleForm){
    sampleForm.addEventListener('submit', (e)=>{
      const email = sampleForm.querySelector('input[type="email"]');
      if(email && !/^\S+@\S+\.\S+$/.test(email.value)){
        e.preventDefault();
        alert('Please enter a valid email address.');
        email.focus();
      }
    });
  }
});
