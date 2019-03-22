import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import Logo from './logo.twig';

storiesOf('Atoms/Logo', module)
    .add('Logo', () => Logo());
