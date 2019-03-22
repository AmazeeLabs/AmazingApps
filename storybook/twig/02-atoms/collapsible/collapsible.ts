class Collapsible extends HTMLElement {
    constructor() {
        super();
        let collapsed = true;

        const contentWrapper = this.ownerDocument.createElement('div');
        contentWrapper.style.display = 'none';
        this.append(contentWrapper);

        while (this.firstChild !== contentWrapper) {
            contentWrapper.appendChild(this.firstChild);
        }

        const toggle = this.ownerDocument.createElement('button');
        toggle.innerText = 'Open';
        this.prepend(toggle);

        toggle.addEventListener('click', () => {
            collapsed = !collapsed;
            toggle.innerText = collapsed ? 'Open' : 'Close';
            contentWrapper.style.display = collapsed ? 'none' : 'block';
        });
    }
}

window.customElements.define('aa-collapsible', Collapsible);
