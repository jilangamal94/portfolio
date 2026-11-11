(function(){
  var root=document.documentElement, lb=document.getElementById('lang');
  function setLang(l){
    root.lang=l; root.dir=l==='ar'?'rtl':'ltr';
    document.querySelectorAll('[data-ar]').forEach(function(e){e.textContent=e.getAttribute('data-'+l)});
    lb.textContent=l==='ar'?'English':'العربية';
    document.title=l==='ar'?'جيلان جمال | مطوّرة ويب':'Jilan Gamal | Web Developer';
    try{localStorage.setItem('lang',l)}catch(e){}
  }
  lb.addEventListener('click',function(){setLang(root.lang==='ar'?'en':'ar')});
  try{ if(localStorage.getItem('lang')==='en') setLang('en'); }catch(e){}
})();