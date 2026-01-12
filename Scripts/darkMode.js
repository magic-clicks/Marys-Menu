const toggleButton = document.getElementById("dark-mode");
const body = document.body;
 
    toggleButton.addEventListener(`click`, function(){

        body.classList.toggle(`dark-mode`);
        
        if(body.classList.contains(`dark-mode`)){
            toggleButton.textContent = `Light Mode`;
        }
        else{
            toggleButton.textContent = `Dark Mode`;
        }
    })