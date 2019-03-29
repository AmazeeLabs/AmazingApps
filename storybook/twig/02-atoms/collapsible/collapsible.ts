import {
    LitElement,
    html,
    TemplateResult,
    css,
    svg,
    property, customElement,
} from "lit-element";

const iconExpand = svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="icon" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
const iconCollapse = svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="icon" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;

@customElement('aa-collapsible')
class Collapsible extends LitElement {

    @property({ attribute: 'collapsed', type: Boolean, reflect: true })
    collapsed = false;

    static get styles() {
        return css`
            :host {
              display: block;
              position: relative;
            }

            button {
              padding: 0;
              margin: 0;
              border: none;
              background: none;
            }
            
            .hidden {
              position: absolute;
              display: block;
              text-indent: -999em;
            }
            
            .header {
              display: flex;
              align-items: center;
            }
            
            svg {
              display: block;
            }
            
            path.icon {
              fill: var(--color-text);
            }
            
            .header > * {
              flex-grow: 1;
            }
            
            .header > button {
              flex-grow: 0;
            }
        `;
    }

    protected render(): TemplateResult | void {
        return html`
          <div class="header">
            <div><slot name="title"></slot></div>
            <button
              @click=${this.toggle}
              class=${this.collapsed ? 'collapsed' : 'expanded'}
            ><span class="hidden">${this.collapsed ? 'Expand' : 'Collapse'}</span>${this.collapsed ? iconExpand : iconCollapse}</button>
          </div>
          ${this.collapsed ? null : html`<slot name="content"></slot>`}
        `;
    }

    toggle() {
        this.collapsed = !this.collapsed;
    }
}
