const toggleButton = document.getElementById("dark-mode");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    body.classList.add("dark-mode");
    toggleButton.textContent = "Light Mode";
}
else{
    toggleButton.textContent = "Dark Mode";
}
 
toggleButton.addEventListener(`click`, function(){

    body.classList.toggle(`dark-mode`);
    
    if(body.classList.contains(`dark-mode`)){
        toggleButton.textContent = `Light Mode`;
        localStorage.setItem("theme", "dark");
    }
    else{
        toggleButton.textContent = `Dark Mode`;
        localStorage.setItem("theme", "light");
    }
});