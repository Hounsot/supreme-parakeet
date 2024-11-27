import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  document.querySelector('#OpenButton').addEventListener('click', function() {
    const floatForm = document.querySelector('.A_FloatForm');
    const floatFormBG = document.querySelector('.O_Form');
    if (floatForm) {
      floatFormBG.classList.add('U_Open');
      floatForm.classList.add('U_Open');
      body.classList.add('no-scroll'); // Disable body scroll
    }
  });  
  document.querySelector('.A_BurgerCloseButton').addEventListener('click', function() {
    const floatForm = document.querySelector('.A_FloatForm');
    const floatFormBG = document.querySelector('.O_Form');
    if (floatForm) {
      floatFormBG.classList.remove('U_Open');
      floatForm.classList.remove('U_Open');
      body.classList.remove('no-scroll'); // Enable body scroll
    }
  });  
  document.querySelector('.W_MarkContainer').addEventListener('click', function() {
    const checkmark = document.querySelector('.A_Mark');
    if (checkmark) {
      checkmark.classList.toggle('Active');
    }
  });  
  // Select all project cards
  const projectCards = document.querySelectorAll(".M_Project");

  projectCards.forEach((card) => {
    const toggleButton = card.querySelector(".A_OpenButton");
    const projectImage = card.querySelector(".A_ProjectImage");
    const infoSectionRow = card.querySelector(".W_ProjectInfo");
    console.log(toggleButton)
    console.log(projectImage)
    console.log(infoSectionRow)
    toggleButton.addEventListener("click", () => {
        console.log("test")
        console.log(projectImage)
      projectImage.classList.toggle("active");
      infoSectionRow.classList.toggle("active");
      toggleButton.classList.toggle("active");
    });
  });
});
