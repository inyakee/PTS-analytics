/* File URLs need actual filenames; GitHub Pages serves folder index files. */
(function(){
  if(location.protocol !== 'file:') return;
  document.querySelectorAll('a[href]').forEach(function(a){
    var href=a.getAttribute('href');
    if(!href || /^(https?:|mailto:|#)/i.test(href)) return;
    if(href==='dashboard/' || href==='login/' || href==='traffic/' || href==='performance/' || /^\.\.\/(dashboard|login|traffic|performance)\/$/.test(href)) a.setAttribute('href',href+'index.html');
    if(href==='../') a.setAttribute('href','../index.html');
  });
  var form=document.getElementById('loginForm');
  if(form) form.addEventListener('submit',function(e){
    if(!form.checkValidity())return;
    e.preventDefault();e.stopImmediatePropagation();location.href='dashboard/index.html';
  },true);
  var logout=document.getElementById('logoutSide');
  if(logout) logout.addEventListener('click',function(e){e.stopImmediatePropagation();location.href='../index.html';},true);
})();
