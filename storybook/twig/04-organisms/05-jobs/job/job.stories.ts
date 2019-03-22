import { storiesOf } from '@storybook/html';

// @ts-ignore
import Job from './job.twig';

import {
    teaser,
    teaserWithThumbnail
} from "../../../03-molecules/02-teasers/01-teaser/teaser.data";
import {headline, text} from "../../../01-base/base.stories";

storiesOf('Organisms/Jobs', module)
    .add('Offering', () => Job({
        title: headline,
        text: { processed: text},
        articles: { teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail] },
        jobs: { teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail] },
        experts: { teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail] },
    }));

