import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import TeaserList from './teaser-list.twig';

import { teaser, teaserWithThumbnail } from "../01-teaser/teaser.data";

storiesOf('Molecules/Teaser/List', module)
    .add('Simple', () => TeaserList({
        teasers: [teaser, teaserWithThumbnail, teaser, teaser]
    }));
