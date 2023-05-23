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