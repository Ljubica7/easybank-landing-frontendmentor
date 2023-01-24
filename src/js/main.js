import "../styles/style.scss";

const getHeader = () => {
  const navigation = document.querySelector(".navigation");
  const navigationUl = document.querySelector(".navigation ul");
  const openMenu = document.querySelector(".burger-menu");
  const closeMenu = document.querySelector(".close-menu");

  openMenu.addEventListener("click", () => {
    navigation.classList.add("active-nav-container");
    navigationUl.classList.add("active-nav-menu");
    console.log(navigationUl);
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
  });

  closeMenu.addEventListener("click", () => {
    navigation.classList.remove("active-nav-container");
    navigationUl.classList.remove("active-nav-menu");
    openMenu.style.display = "flex";
    closeMenu.style.display = "none";
  });
};

getHeader();
