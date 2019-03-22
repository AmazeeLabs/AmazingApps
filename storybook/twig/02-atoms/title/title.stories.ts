import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import Title from './title.twig';

storiesOf('Atoms/Title', module)
    .add('Title', () => Title({
        title: 'This is a title',
    }));
