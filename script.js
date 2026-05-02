const collapsible = document.querySelectorAll(".collapsible");
const navToggler = document.querySelector(".nav__toggler");
collapsible.forEach((item) => 
    item.addEventListener("click", function(){
        this.classList.toggle("collapsible--expanded");
    })
); 

navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('fa-bars')
  navToggler.classList.toggle('fa-times')
})