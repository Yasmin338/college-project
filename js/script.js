function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }
  
  
  let preveiewContainer = document.querySelector('.recipes-preview');
  let preveiewBox = preveiewContainer.querySelectorAll('.preview');

  document.querySelectorAll('.recipes-container .recipe').forEach(recipe =>{
    recipe.onclick = () =>{
      preveiewContainer.style.display = 'flex';
      let name = recipe.getAttribute('data-name');
      preveiewBox.forEach(preview =>{
let target = preview.getAttribute('data-target');
if(name == target){
  preview.classList.add('active');
}
      });
    };
  });

  preveiewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      preveiewContainer.style.display = 'none';
    };
  });

