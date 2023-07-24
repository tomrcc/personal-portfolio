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
}

checkDarkMode();
