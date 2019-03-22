import {customElement, LitElement, html, TemplateResult, css } from "lit-element";

@customElement('aa-collapsible')
class Collapsible extends LitElement {

    static get properties() {
        return {
            collapsed: { attribute: 'collapsed', type: Boolean, reflect: true }
        }
    }

    static get styles() {
        return css`
            :host {
              display: block;
              position: relative;
              padding: 1em;
              border: 1px solid red;
            }
            
            button {
              position: absolute;
              top: 0;
              right: 0;
              background: lime;
              border: none;
            }
        `;
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
