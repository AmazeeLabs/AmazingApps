class Collapsible extends HTMLElement {
    constructor() {
        super();
        let collapsed = true;

        this.attachShadow({mode: 'open'});

        const contentWrapper = this.ownerDocument.createElement('div');
        contentWrapper.style.display = 'none';
        this.shadowRoot.append(contentWrapper);

        const slot = this.ownerDocument.createElement('slot');
        contentWrapper.append(slot);

        const toggle = this.ownerDocument.createElement('button');
        toggle.innerText = 'Open';
        this.shadowRoot.prepend(toggle);

        toggle.addEventListener('click', () => {
            collapsed = !collapsed;
            toggle.innerText = collapsed ? 'Open' : 'Close';
            contentWrapper.style.display = collapsed ? 'none' : 'block';
        });
    }
}

window.customElements.define('aa-collapsible', Collapsible);
