class Collapsible extends HTMLElement {
    constructor() {
        super();
        console.log('Creating element!');
    }
}

window.customElements.define('aa-collapsible', Collapsible);
