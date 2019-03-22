import {customElement, LitElement, html, TemplateResult} from "lit-element";

@customElement('aa-collapsible')
class Collapsible extends LitElement {

    static get properties() {
        return {
            collapsed: { attribute: 'collapsed', type: Boolean, reflect: true }
        }
    }

    constructor() {
        super();
    }

    protected render(): TemplateResult | void {
        return html`
            <button @click=${this.toggle}>${this.collapsed ? 'Open' : 'Close'}</button>
            <div style="display: ${this.collapsed ? 'none' : 'block'}">\
              <slot></slot>
            </div>
        `;
    }

    toggle() {
        this.collapsed = !this.collapsed;
    }
}
