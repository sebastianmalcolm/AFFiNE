import { DoneIcon } from '@blocksuite/icons/rc';
import clsx from 'clsx';

import type { MenuItemProps } from './menu.types';
import * as styles from './styles.css';

export const useMenuItem = <T extends MenuItemProps>({
  children: propsChildren,
  type = 'default',
  className: propsClassName,
  prefix,
  prefixIcon,
  suffix,
  suffixIcon,
  checked,
  selected,
  block,
  ...otherProps
}: T) => {
  const className = clsx(
    styles.menuItem,
    {
      danger: type === 'danger',
      warning: type === 'warning',
      checked,
      selected,
      block,
    },
    propsClassName
  );

  const children = (
    <>
      {prefix}

      {prefixIcon ? (
        <div className={styles.menuItemIcon}>{prefixIcon}</div>
      ) : null}

      <span className={styles.menuSpan}>{propsChildren}</span>

      {suffixIcon ? (
        <div className={styles.menuItemIcon}>{suffixIcon}</div>
      ) : null}

      {suffix}

      {checked || selected ? (
        <div className={styles.menuItemIcon}>
          <DoneIcon />
        </div>
      ) : null}
    </>
  );

  return {
    children,
    className,
    otherProps,
  };
};
