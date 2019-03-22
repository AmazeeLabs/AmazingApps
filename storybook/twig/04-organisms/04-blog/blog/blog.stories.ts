import { storiesOf } from '@storybook/html';

// @ts-ignore
import BlogListing from './blog.twig';

import {
    teaser,
    teaserWithThumbnail
} from "../../../03-molecules/02-teasers/01-teaser/teaser.data";

storiesOf('Organisms/Blog', module)
    .add('Listing', () => BlogListing({
        articles: { teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail] },
    }));

