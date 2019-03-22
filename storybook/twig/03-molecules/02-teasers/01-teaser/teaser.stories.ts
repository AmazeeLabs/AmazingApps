import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import Teaser from './teaser.twig';

import { teaser, teaserWithThumbnail} from "./teaser.data";

storiesOf('Molecules/Teaser', module)
    .add('Simple', () => Teaser(teaser))
    .add('Thumbnail', () => Teaser(teaserWithThumbnail));
