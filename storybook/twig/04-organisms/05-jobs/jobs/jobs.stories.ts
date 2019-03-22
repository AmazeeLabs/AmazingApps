import { storiesOf } from '@storybook/html';

// @ts-ignore
import JobListing from './jobs.twig';

import {
    teaser,
    teaserWithThumbnail
} from "../../../03-molecules/02-teasers/01-teaser/teaser.data";

storiesOf('Organisms/Jobs', module)
    .add('Listing', () => JobListing({
        jobs: { teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail] },
    }));

