import { storiesOf } from '@storybook/html';

// @ts-ignore
import Article from './article.twig';

import {
    teaser,
    teaserWithThumbnail
} from "../../../03-molecules/02-teasers/01-teaser/teaser.data";

import { text, headline } from "../../../01-base/base.stories";

storiesOf('Organisms/Blog', module)
    .add('Article', () => Article({
        title: headline,
        text: {
            processed: text,
        },
        hero: {
            alt: 'A placeholder',
            image: {
                url: 'https://via.placeholder.com/1200x400',
                width: 2000,
                height: 800
            }
        },
        articles: { teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail] },
        jobs: { teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail]},
        experts: {teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail]},
    }));

