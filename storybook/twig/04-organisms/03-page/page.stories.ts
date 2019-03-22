import { storiesOf } from '@storybook/html';

// @ts-ignore
import Page from './page.twig';

storiesOf('Organisms/Page', module)
    .add('Home', () => Page({
        title: 'This is a title.',
        text: { processed: 'This is some text.' },
    }));
