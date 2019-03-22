import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import Date from './date.twig';

storiesOf('Atoms/Date', module)
    .add('Date', () => Date({date: '2018-09-28 16:00'}));
