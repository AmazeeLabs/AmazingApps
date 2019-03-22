import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import TeaserBox from './teaser-box.twig';

import { teaser, teaserWithThumbnail } from "../01-teaser/teaser.data";

const teaserBox = {
    title: 'Some teasers',
    teasers: [teaser, teaserWithThumbnail, teaser, teaser],
    url: '#'
};

storiesOf('Molecules/Teaser/Box', module)
    .add('White', () => TeaserBox(Object.assign(teaserBox, { theme: 'white'})))
    .add('Black', () => TeaserBox(Object.assign(teaserBox, { theme: 'black'})))
    .add('Yellow', () => TeaserBox(Object.assign(teaserBox, { theme: 'yellow'})));
