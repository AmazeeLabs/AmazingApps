import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import Home from './home.twig';
import {
    teaser,
    teaserWithThumbnail
} from "../../03-molecules/02-teasers/01-teaser/teaser.data";

storiesOf('Organisms/Home', module)
    .add('Home', () => Home({
        articles: [teaser, teaserWithThumbnail, teaserWithThumbnail],
        jobs: [teaser, teaser, teaser],
        experts: [teaser, teaser, teaserWithThumbnail],
    }));
