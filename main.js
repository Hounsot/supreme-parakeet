import './style.css'

document.addEventListener("DOMContentLoaded", () => {
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
