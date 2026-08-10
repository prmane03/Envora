document.addEventListener('DOMContentLoaded',function(){
  // set year
  const y = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.textContent = y;

  // ensure theme color applied after load (changes browser UI color where supported)
  (function setThemeColor(){
    const desired = '#2b96aa';
    let meta = document.querySelector('meta[name="theme-color"]');
    if(!meta){ meta = document.createElement('meta'); meta.name = 'theme-color'; document.head.appendChild(meta); }
    meta.setAttribute('content', desired);
  })();

  // mobile menu
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  toggle && toggle.addEventListener('click',()=>{
    if(nav.classList.contains('open')) nav.classList.remove('open'); else nav.classList.add('open');
  });

  // reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // mobile menu behavior
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        if(nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });

  // simple form handler (demo)
  const form = document.querySelector('.contact-form');
  form && form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thanks! Your request has been received. We will contact you shortly.');
    form.reset();
  });
});
