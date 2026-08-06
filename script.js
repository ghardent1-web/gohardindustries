const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value;const email=document.getElementById('email').value;const service=document.getElementById('service').value;const message=document.getElementById('message').value;const subject=encodeURIComponent(`GO HARD INDUSTRIES Project Request: ${service}`);const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject Details:\n${message}`);window.location.href=`mailto:ghardent1@gmail.com?subject=${subject}&body=${body}`;});
