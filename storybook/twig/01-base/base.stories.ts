import { storiesOf } from '@storybook/html';
import './index';

// ======================================================================
// COLORS
// ======================================================================
// @ts-ignore
import Colors from './01-colors/colors.twig';

storiesOf('Base styling/Colors', module)
    .add('White', () => Colors({color: 'white'}))
    .add('Black', () => Colors({color: 'black'}))
    .add('yellow', () => Colors({color: 'yellow'}))
    .add('blue', () => Colors({color: 'blue'}));

// ======================================================================
// TEXT
// ======================================================================
// @ts-ignore
import Text from './02-text/text.twig';

export const text = `
    There isn't a <em>rule</em>. You just practice and find out which way works best for <strong>you</strong>.
    The only thing worse than <a href="https://en.wikipedia.org/wiki/Don%27t_Eat_the_Yellow_Snow">yellow snow</a> is
    green snow. I get carried away with this brush cleaning. We have a fantastic little sky! Let's get crazy.
    This is probably the greatest thing to happen in my life - to be able to share this with you.
`;
storiesOf('Base styling/Text', module)
    .add('Formatted', () => Text({text}));

// ======================================================================
// HEADLINES
// ======================================================================
// @ts-ignore
import Headline from './03-headline/headline.twig';

export const headline = 'Uuummmm, this is a tasty burger!';

[1, 2, 3, 4, 5, 6].forEach( level =>
    storiesOf('Base styling/Headline', module)
        .add(`Level ${level}`, () => Headline({level: level, text: headline}))
);

// ======================================================================
// LISTS
// ======================================================================
// @ts-ignore
import List from './04-list/list.twig';

storiesOf('Base styling/List', module)
    .add('Ordered', () => List({ordered: true, items: [text, text, text]}))
    .add('Unordered', () => List({ordered: false, items: [text, text, text]}));

// ======================================================================
// IMAGES
// ======================================================================
// @ts-ignore
import Image from './05-image/image.twig';

storiesOf('Base styling/Image', module)
    .add('Simple', () => Image({
        alt: 'A placeholder image',
        image: {
            url: 'https://via.placeholder.com/400x300',
            width: 400,
            height: 300,
        }
    }));

// ======================================================================
// THEMING
// ======================================================================
// @ts-ignore
import Theme from './06-theme/theme.twig';

const content = Headline({level: 1, text: headline}) + Text({text}) + List({ordered: false, items:[text, text, text]});

storiesOf('Base styling/Theme', module)
    .add('White', () => Theme({content, theme: 'white'}))
    .add('Black', () => Theme({content, theme: 'black'}))
    .add('Yellow', () => Theme({content, theme: 'yellow'}));

// ======================================================================
// DRUPAL TABS
// ======================================================================
// @ts-ignore
import Tabs from './07-drupal/tabs/tabs.twig';

storiesOf('Base styling/Drupal', module)
    .add('Tabs', () => Tabs());

