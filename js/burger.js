document.querySelector('.burger').addEventListener('click',function(){
  this.classList.toggle('active');
  document.querySelector('.burger_elm').classList.toggle('open');
})