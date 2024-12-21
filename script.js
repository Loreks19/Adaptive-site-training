const items = document.querySelectorAll('.icon_plus');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i=0; i< items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToogle == 'false' ) {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));