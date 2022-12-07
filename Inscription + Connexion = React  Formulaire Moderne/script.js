const Toggle1 = document.querySelector(".toggle1");
const Toggle2 = document.querySelector(".toggle2");
const Toggle3 = document.querySelector(".toggle3");
const Toggle4 = document.querySelector(".toggle4");
const Inscription = document.querySelector(".inscription");
const Connect = document.querySelector(".connect");

Toggle1.addEventListener('click', () => {
    Inscription.classList.add("delete");     
    Connect.classList.add("add");     
    Inscription.classList.remove("add");     
    Connect.classList.remove("delete");     
})

Toggle2.addEventListener('click', () => {
    Inscription.classList.add("add");     
    Connect.classList.add("delete");     
    Inscription.classList.remove("delete");     
    Connect.classList.remove("add");     
})

Toggle3.addEventListener('click', () => {
    Inscription.classList.add("delete");     
    Connect.classList.add("add");     
    Inscription.classList.remove("add");     
    Connect.classList.remove("delete");     
})

Toggle4.addEventListener('click', () => {
    Inscription.classList.add("add");     
    Connect.classList.add("delete");     
    Inscription.classList.remove("delete");     
    Connect.classList.remove("add");     
})
