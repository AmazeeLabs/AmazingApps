import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import Footer from './footer.twig';
import {menu} from "../../../03-molecules/01-menu/menu.data";

storiesOf('Organisms/Footer', module)
    .add('Footer', () => Footer({
        footerNav: menu,
    }));
