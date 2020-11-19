let storedMode = localStorage.getItem('storedMode');

if(storedMode === null) {
    setTheme('light');
} else {
    setTheme(storedMode);
}

let themes = document.getElementsByClassName("themeDots");

for(let i = 0;  i < themes.length; i++) {
    themes[i].addEventListener("click", function() {
        let mode = this.dataset.mode;
        console.log(mode);
        setTheme(mode);
    });
}


function setTheme(mode) {
    switch (mode) {
        case "light":  document.getElementById("themeStyle").href="style.css";
            
            break;

        case "blue": document.getElementById("themeStyle").href="blue.css";
            
            break;

        case "green": document.getElementById("themeStyle").href="green.css";
            
            break;

        case "purple": document.getElementById("themeStyle").href="purple.css";
            
            break;
        default: "something wrong";
            break;
    }

    localStorage.setItem('storedMode', mode);
}