import { storiesOf } from '@storybook/html';
import './index';

// @ts-ignore
import Header from './header.twig';
import {menu} from "../../../03-molecules/01-menu/menu.data";

storiesOf('Organisms/Header', module)
    .add('Header', () => Header({
        headerNav: menu,
    }));
