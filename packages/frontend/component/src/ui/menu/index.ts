export * from './menu.types';
import { DesktopMenuItem } from './desktop/item';
import { DesktopMenu } from './desktop/root';
import { DesktopMenuSeparator } from './desktop/separator';
import { DesktopMenuSub } from './desktop/sub';
import { MenuTrigger } from './menu-trigger';
import { MobileMenuItem } from './mobile/item';
import { MobileMenu } from './mobile/root';
import { MobileMenuSeparator } from './mobile/separator';
import { MobileMenuSub } from './mobile/sub';

const isMobile = environment.isBrowser && environment.isMobile;

const MenuItem = isMobile ? MobileMenuItem : DesktopMenuItem;
const MenuSeparator = isMobile ? MobileMenuSeparator : DesktopMenuSeparator;
const MenuSub = isMobile ? MobileMenuSub : DesktopMenuSub;
const Menu = isMobile ? MobileMenu : DesktopMenu;

export { Menu, MenuItem, MenuSeparator, MenuSub, MenuTrigger };
