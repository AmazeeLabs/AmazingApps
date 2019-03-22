import { storiesOf } from '@storybook/html';
import {text} from "../../01-base/base.stories";
import './index';

storiesOf('Atoms/Collapsible')
    .add('Single', () => `<aa-collapsible collapsed><p>${text}</p></aa-collapsible>`)
    .add('Open', () => `<aa-collapsible><p>${text}</p></aa-collapsible>`)
    .add('Multiple', () => `
      <aa-collapsible><p>${text}</p></aa-collapsible>
      <aa-collapsible collapsed><p>${text}</p></aa-collapsible>
    `)
    .add('Nested', () => `
      <aa-collapsible>
        <p>${text}</p>
        <aa-collapsible collapsed>
          <p>${text}</p>
        </aa-collapsible>
      </aa-collapsible>
    `);
