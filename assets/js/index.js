function toggleLogos() {
  const htmlElement = document.querySelector("html");
  const darkLogos = document.getElementsByClassName("logo-list-item-dark");
  const lightLogos = document.getElementsByClassName("logo-list-item-light");
  if(htmlElement.classList.value === 'dark'){        
    for (let i = 0; i < darkLogos.length; i++) {
      darkLogos[i].style.display = "block";
    }
    for (let i = 0; i < lightLogos.length; i++) {
      lightLogos[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < lightLogos.length; i++) {
      lightLogos[i].style.display = "block";
    }
    for (let i = 0; i < darkLogos.length; i++) {
      darkLogos[i].style.display = "none";
    }
  }
};

function toggleDarkMode() {
  const element = document.querySelector("html")
  element.classList.toggle("dark");
  toggleLogos();
};

function checkDarkMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  console.log('Checking for appearance theme...')
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    console.log('User prefers dark theme.')
    document.documentElement.classList.add('dark')
  } else {
    console.log('User prefers light theme.')
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')
};

checkDarkMode();
toggleLogos();