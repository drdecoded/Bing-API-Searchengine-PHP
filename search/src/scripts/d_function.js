'use strict';

const toggleBtn = document.querySelectorAll('.search-theme-toggle-button1');
let darkMode = localStorage.getItem("dark-mode");

for (let m = 0; m < toggleBtn.length; m++){
    toggleBtn[m].addEventListener("click", (e) => { 
        darkMode = localStorage.getItem("dark-mode");
        if (darkMode === "disabled" || darkMode == null) {
          darkmode();
        } else {
          lightmode();
        }
    });
    }
    
function darkmode() {
    darkMode = localStorage.getItem("dark-mode");
    const themeBtn = document.querySelectorAll('.search-theme-toggle-button1');
    document.body.classList.add('dark-theme');
    document.body.classList.remove('default-theme');
    for (let i = 0; i < themeBtn.length; i++){
    themeBtn[i].classList.add('dark');
    themeBtn[i].classList.remove('default');
    }
    localStorage.setItem("dark-mode", "enabled");
    
}

function lightmode() {
    darkMode = localStorage.getItem("dark-mode");
    const themeBtn = document.querySelectorAll('.search-theme-toggle-button1');
    document.body.classList.add('default-theme');
    document.body.classList.remove('dark-theme');
    for (let i = 0; i < themeBtn.length; i++){
    themeBtn[i].classList.add('default');
    themeBtn[i].classList.remove('dark');
    }
    localStorage.setItem("dark-mode", "disabled");
}

if (darkMode === "enabled") {
    darkmode();
}