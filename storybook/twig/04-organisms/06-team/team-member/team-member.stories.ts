import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import TeamMember from './team-member.twig';

import {
    teaser,
    teaserWithThumbnail
} from "../../../03-molecules/02-teasers/01-teaser/teaser.data";
import {headline, text} from "../../../01-base/base.stories";

storiesOf('Organisms/Team', module)
    .add('Member', () => TeamMember({
        title: headline,
        text: { processed: text},
        portrait: {
            alt: 'A placeholder',
            image: {
                url: 'https://via.placeholder.com/800x1200',
                width: 800,
                height: 1200,
            }
        },
        articles: { teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail] },
        jobs: { teasers: [teaser, teaserWithThumbnail, teaserWithThumbnail] },
    }));

