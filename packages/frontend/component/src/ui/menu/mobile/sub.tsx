import { ArrowRightSmallPlusIcon } from '@blocksuite/icons/rc';

import type { MenuSubProps } from '../menu.types';
import { useMenuItem } from '../use-menu-item';
import { MobileMenu } from './root';

export const MobileMenuSub = ({
  children: propsChildren,
  items,
  triggerOptions,
  subContentOptions: {
    className: subContentClassName = '',
    ...otherSubContentOptions
  } = {},
}: MenuSubProps) => {
  const {
    className,
    children,
    otherProps: otherTriggerOptions,
  } = useMenuItem({
    ...triggerOptions,
    children: propsChildren,
    suffixIcon: <ArrowRightSmallPlusIcon />,
  });

  return (
    <MobileMenu
      items={items}
      contentOptions={{
        className: subContentClassName,
        ...otherSubContentOptions,
      }}
    >
      <div className={className} {...otherTriggerOptions}>
        {children}
      </div>
    </MobileMenu>
  );
};
