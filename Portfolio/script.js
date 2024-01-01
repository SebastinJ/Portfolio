function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to set initial theme based on localStorage or default to light theme
function setInitialTheme() {
  const storedMode = localStorage.getItem('preferredMode');
  const style = document.getElementById('light-style');

  if (storedMode === 'dark') {
    style.href = 'dark-style.css'; // Apply dark mode stylesheet
    toggleTheme(); // Update theme icons if needed
    toggleMode(); // Update mode toggler button if needed
  }
}

// Call the function to set the initial theme when the page loads
window.addEventListener('load', setInitialTheme);

// Function to toggle styles between light and dark mode
function toggleStyles() {
  const style = document.getElementById('light-style');
  let mode;

  if (style.getAttribute('href') === 'style.css') {
    style.href = 'dark-style.css'; // Switch to dark mode stylesheet
    mode = 'dark';
  } else {
    style.href = 'style.css'; // Switch back to light mode stylesheet
    mode = 'light';
  }

  // Save the mode preference to localStorage
  localStorage.setItem('preferredMode', mode);

  toggleTheme();
  toggleMode();
}

// Rest of your code remains unchanged...





function toggleMode() {
  const modes = document.querySelectorAll(".mode");
  const darks = document.querySelectorAll(".moon-icon");

  // Loop through each element with the class 'dark' and toggle the mode
  darks.forEach((dark, index) => {
    const mode = modes[index];
    if (dark.id === "1") {
      mode.innerHTML = `
        <button class="toggle-light">
          <img class="moon-icon" src="./assets/moon-dark.png" onclick="toggleStyles();" id="0">
        </button>
        <div class="mode-tooltip">View in Light Theme</div>`;
      dark.id = "0";
    } else if (dark.id === "0") {
      mode.innerHTML = `
        <button class="toggle-dark">
          <img class="moon-icon" src="./assets/moon-light.png" id="1" onclick="toggleStyles();">
        </button>
        <div class="mode-tooltip">View in Dark Theme</div>`;
      dark.id = "1";
    }
  });
 // Check the updated content of .mode elements
}







function toggleTheme() {
  // Get all elements with the class 'theme-icon'
  const icons = document.querySelectorAll('.icon');

  // Loop through each icon to toggle the theme
  icons.forEach(icon => {
    if (icon.classList.contains('light')) {
      icon.src = icon.src.replace('light', 'dark'); // Replace 'light' with 'dark'
      icon.classList.remove('light');
      icon.classList.add('dark');
      // console.log(icon.src);
    } else if (icon.classList.contains('dark')) {
      icon.src = icon.src.replace('dark', 'light'); // Replace 'dark' with 'light'
      icon.classList.remove('dark');
      icon.classList.add('light');
      // console.log(icon.src);
    }
  });
}
