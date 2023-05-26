function availability(event) {
    // get the clicking element
    const element = event.target;

    // get the inner html
    const elementInnerText = element.innerHTML;

    // toggle the inner html between circle outline or highlight
    if (elementInnerText === 'check_circle_outline') {
        element.innerHTML = 'highlight_off';
    } else {
        element.innerHTML = 'check_circle_outline';
    }
}

// POLL VOTING 

const options = document.querySelectorAll("label");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", ()=>{
        options[i].classList.add("selected");
        for (let j = 0; j < options.length; j++) {
            options[j].classList.add("selectall");
        }    
    });
}