import { storiesOf } from '@storybook/html';
import {text} from "../../01-base/base.stories";
import './index';

storiesOf('Atoms/Collapsible')
    .add('Single', () => `<aa-collapsible><p>${text}</p></aa-collapsible>`)
    .add('Multiple', () => `
      <aa-collapsible><p>${text}</p></aa-collapsible>
      <aa-collapsible><p>${text}</p></aa-collapsible>
    `)
    .add('Nested', () => `
      <aa-collapsible>
        <p>${text}</p>
        <aa-collapsible>
          <p>${text}</p>
        </aa-collapsible>
      </aa-collapsible>
    `);
