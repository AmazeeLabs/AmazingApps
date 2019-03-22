import { storiesOf } from '@storybook/html';

// @ts-ignore
import TeamListing from './team.twig';

import {
    teaser,
    teaserWithThumbnail
} from "../../../03-molecules/02-teasers/01-teaser/teaser.data";

storiesOf('Organisms/Team', module)
    .add('Listing', () => TeamListing({
        members: { teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail] },
    }));

