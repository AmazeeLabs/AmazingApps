import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import More from './more-link.twig';

storiesOf('Atoms/More link', module)
    .add('More link', () => More({
        title: 'Tell me more about this!',
        url: '#',
        text: 'Learn more',
    }));
