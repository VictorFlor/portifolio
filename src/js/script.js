const imagem = document.querySelector('.fa-brands');
const modal = document.querySelector('.modal');

imagem.addEventListener('mouseover', function() {
  modal.style.display = 'block';
});

imagem.addEventListener('mouseout', function() {
  modal.style.display = 'none';
});