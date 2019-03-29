import { storiesOf } from '@storybook/html';
import {text} from "../../01-base/base.stories";
import './index';

storiesOf('Atoms/Collapsible')
    .add('Single', () => `
      <aa-collapsible collapsed>
        <h2 slot="title">Collapsible</h2>
        <p slot="content">${text}</p>
      </aa-collapsible>
    `)
    .add('Open', () => `
      <aa-collapsible>
        <h2 slot="title">Collapsible</h2>
        <p slot="content">${text}</p>
      </aa-collapsible>
    `)
    .add('Multiple', () => `
      <aa-collapsible collapsed>
        <h2 slot="title">Collapsible 1</h2>
        <p slot="content">${text}</p>
      </aa-collapsible>
      <aa-collapsible>
        <h2 slot="title">Collapsible 2</h2>
        <p slot="content">${text}</p>
      </aa-collapsible>
    `)
    .add('Nested', () => `
      <aa-collapsible>
        <h2 slot="title">Parent</h2>
        <div slot="content">
          <p>${text}</p>
          <aa-collapsible collapsed>
            <h2 slot="title">Child</h2>
            <p slot="content">${text}</p>
          </aa-collapsible>
        </div>
      </aa-collapsible>
    `);
